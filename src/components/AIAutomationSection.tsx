import React, { useState } from 'react';
import { 
  Terminal, 
  Cpu, 
  Workflow, 
  Database, 
  BrainCircuit, 
  Sparkles, 
  Check, 
  ArrowRight,
  TrendingUp,
  FileCode2
} from 'lucide-react';

export const AIAutomationSection: React.FC = () => {
  const [selectedWorkflow, setSelectedWorkflow] = useState<number>(0);

  const workflows = [
    {
      title: "Automated Drone Telemetry ETL & Anomaly Scoring",
      badge: "Python · Pandas · Scikit-Learn · MAVLink",
      summary: "In-flight and post-flight log parser that ingests raw DFLog / .tlog binary telemetry, cleans sensor time-series, and detects IMU vibration peaks or voltage sag anomalies before catastrophic hardware failure.",
      steps: [
        "Ingests high-rate binary telemetry streams (MAVLink / ULog / DataFlash) via pymavlink",
        "Cleans, resamples, and synchronizes multi-frequency accelerometer, barometer, and GPS arrays",
        "Isolation Forest and Autoencoder models flag anomalous motor heat & vibration deviations",
        "Generates automated PDF/JSON engineering maintenance reports dispatched to team Slack/Email"
      ],
      codeSnippet: `# Python Automated Telemetry Anomaly Ingestion
from pymavlink import mavutil
import pandas as pd
from sklearn.ensemble import IsolationForest

def parse_flight_log(log_path: str):
    mlog = mavutil.mavlink_connection(log_path)
    records = []
    while True:
        msg = mlog.recv_match(type=['ATT', 'VIBE', 'BAT'], blocking=False)
        if not msg:
            break
        records.append(msg.to_dict())
    
    df = pd.DataFrame(records).ffill()
    clf = IsolationForest(contamination=0.015, random_state=42)
    df['anomaly_flag'] = clf.fit_predict(df[['VibeX', 'VibeY', 'VibeZ']])
    return df[df['anomaly_flag'] == -1]
`
    },
    {
      title: "LLM-Powered Mission Planner & Natural Language Dispatch",
      badge: "Python · LLM Function Calling · JSON-RPC",
      summary: "Autonomous mission translation agent that converts natural language operational briefings (e.g. 'Survey perimeter quadrant B at 60m altitude with 75% front overlap') into validated Mission Planner waypoint XML/WPL files.",
      steps: [
        "Parses unstructured user mission directives with structured output validation",
        "Calculates ground sampling distance (GSD), overlap metrics, and battery endurance envelopes",
        "Enforces geofence exclusion polygons and airspace compliance rules automatically",
        "Directly uploads generated waypoint routes to flight controller via MAVLink mission protocol"
      ],
      codeSnippet: `# LLM Mission Intent to MAVLink Waypoint Generation
from pydantic import BaseModel, Field
from typing import List

class SurveyWaypoint(BaseModel):
    lat: float
    lon: float
    alt_meters: float
    action: str = "WAYPOINT"

class MissionPlan(BaseModel):
    survey_area: str
    target_gsd_cm: float
    total_waypoints: int
    waypoints: List[SurveyWaypoint]

def generate_flight_plan(briefing_text: str) -> MissionPlan:
    # Autonomous LLM pipeline extracts geospatial coordinates
    # and enforces fail-safe geofencing before drone arming
    return compiled_mission_plan
`
    },
    {
      title: "Intelligent Enterprise Data & RPA Pipelines",
      badge: "Python · FastAPI · AsyncIO · SQL Automation",
      summary: "End-to-end data pipeline automation eliminating repetitive manual spreadsheet workflows, orchestrating batch processing, API webhooks, and automated analytical summaries.",
      steps: [
        "Headless scraping and API connectors continuously ingest commercial operational data",
        "Automated schema validation, duplicate deduplication, and transformation with Polars/Pandas",
        "Scheduled cron jobs run asynchronously with real-time error telemetry and retry exponential backoffs",
        "Instant delivery of clean analytical summaries to stakeholder databases and executive dashboards"
      ],
      codeSnippet: `# Enterprise Workflow Automation Runner
import asyncio
from datetime import datetime

async def run_automation_pipeline():
    logger.info("Initiating automated pipeline sync at %s", datetime.utcnow())
    data = await fetch_source_telemetry()
    clean_df = transform_and_validate(data)
    await upsert_data_warehouse(clean_df)
    await notify_stakeholders({"records_processed": len(clean_df), "status": "SUCCESS"})

asyncio.run(run_automation_pipeline())
`
    }
  ];

  const current = workflows[selectedWorkflow];

  return (
    <section id="ai-automation" className="hero-details-strip" style={{ paddingTop: '0' }}>
      <div className="hero-section-card">
        <div className="hero-section-header">
          <div>
            <div className="text-xs font-mono tracking-widest text-cyan-400 uppercase flex items-center gap-2 mb-1.5">
              <BrainCircuit size={14} />
              <span>AI, Machine Learning & Automation</span>
            </div>
            <h2 className="hero-section-title">Intelligent Pipelines & Autonomous Logic</h2>
          </div>

          <div className="text-xs font-mono text-slate-400">
            ENGINEERING FOCUS: PYTHON · ML · LLMS · ETL
          </div>
        </div>

        {/* Workflow Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          {workflows.map((wf, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedWorkflow(idx)}
              className={`p-3.5 rounded-xl text-left transition-all border ${
                selectedWorkflow === idx
                  ? 'bg-slate-900 border-cyan-500/50 shadow-lg shadow-cyan-950/20'
                  : 'bg-slate-950/40 border-slate-800/80 hover:border-slate-700 text-slate-400'
              }`}
            >
              <div className="text-xs font-mono text-slate-400 mb-1">0{idx + 1}. PIPELINE</div>
              <div className={`text-sm font-semibold ${selectedWorkflow === idx ? 'text-white' : 'text-slate-300'}`}>
                {wf.title}
              </div>
              <div className="text-[11px] text-cyan-400 mt-2 font-mono truncate">
                {wf.badge}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Workflow Inspection */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 rounded-xl bg-slate-900/60 border border-slate-800">
          <div className="lg:col-span-6 space-y-4">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                Pipeline Architecture & Execution
              </span>
              <h3 className="text-lg font-bold text-white mt-1">{current.title}</h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">{current.summary}</p>
            </div>

            <div className="space-y-2.5 pt-2">
              <div className="text-xs font-mono text-slate-400">EXECUTION MILESTONES:</div>
              {current.steps.map((st, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                  <div className="w-5 h-5 rounded-md bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 font-mono text-[10px]">
                    {i + 1}
                  </div>
                  <span>{st}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Code snippet preview */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <FileCode2 size={13} />
                pipeline_core.py
              </span>
              <span>Python 3.11</span>
            </div>

            <div className="flex-1 bg-slate-950 p-4 rounded-lg border border-slate-800 font-mono text-[11px] text-emerald-300 overflow-x-auto leading-relaxed">
              <pre>{current.codeSnippet}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAutomationSection;
