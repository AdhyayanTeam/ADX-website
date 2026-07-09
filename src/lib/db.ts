import { DatabaseSync } from "node:sqlite";
import path from "node:path";
import fs from "node:fs";

const DB_PATH = path.join(process.cwd(), "data", "adx.db");

let db: DatabaseSync | null = null;

export function getDb(): DatabaseSync {
  if (!db) {
    const dbDir = path.dirname(DB_PATH);
    if (!fs.existsSync(dbDir)) {
      fs.mkdirSync(dbDir, { recursive: true });
    }
    db = new DatabaseSync(DB_PATH);
    db.exec("PRAGMA journal_mode = WAL");
    db.exec("PRAGMA foreign_keys = ON");
    initSchema(db);
  }
  return db;
}

function initSchema(db: DatabaseSync) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS leads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      created_at TEXT DEFAULT (datetime('now')),
      company_name TEXT NOT NULL,
      industry TEXT NOT NULL,
      monthly_volume TEXT NOT NULL,
      biggest_bottleneck TEXT NOT NULL,
      whatsapp TEXT NOT NULL,
      email TEXT NOT NULL,
      status TEXT DEFAULT 'new',
      notes TEXT
    )
  `);

  db.exec(`
    CREATE TABLE IF NOT EXISTS lead_events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      lead_id INTEGER NOT NULL,
      event_type TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now')),
      metadata TEXT,
      FOREIGN KEY (lead_id) REFERENCES leads(id)
    )
  `);

  db.exec(`
    CREATE TABLE IF NOT EXISTS analytics_events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      event TEXT NOT NULL,
      page TEXT NOT NULL,
      metadata TEXT,
      created_at TEXT DEFAULT (datetime('now'))
    )
  `);
}

export interface LeadInput {
  companyName: string;
  industry: string;
  volume: string;
  bottleneck: string;
  whatsapp: string;
  email: string;
}

export function insertLead(input: LeadInput) {
  const db = getDb();
  const stmt = db.prepare(`
    INSERT INTO leads (company_name, industry, monthly_volume, biggest_bottleneck, whatsapp, email)
    VALUES (?, ?, ?, ?, ?, ?)
  `);
  const result = stmt.run(
    input.companyName,
    input.industry,
    input.volume,
    input.bottleneck,
    input.whatsapp,
    input.email,
  );
  const leadId = Number(result.lastInsertRowid);

  const eventStmt = db.prepare(`
    INSERT INTO lead_events (lead_id, event_type, metadata)
    VALUES (?, 'lead_created', ?)
  `);
  eventStmt.run(leadId, JSON.stringify({ source: "website" }));

  return leadId;
}
