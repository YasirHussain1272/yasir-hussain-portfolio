import React, { useState } from 'react';
import { 
  Plane, 
  Cpu, 
  Radio, 
  Crosshair, 
  Sliders, 
  ShieldAlert, 
  CheckCircle2, 
  Terminal,
  Activity,
  Layers
} from 'lucide-react';

export const AvionicsSection: React.FC = () => {
  const [activePlatform, setActivePlatform] = useState<'vtol' | 'multirotor' | 'fixedwing'>('vtol');

  const platforms = {
    vtol: {
      name: "Autonomous Hybrid VTOL",
      tagline: "Vertical Take-Off and Landing with Aerodynamic Cruise Efficiency",
      firmware: "ArduPilot (QuadPlane / TiltRotor)",
      groundControl: "Mission Planner & QGroundControl",
      keyFeatures: [
        "Seamless transition algorithm between hover multirotor and aerodynamic fixed-wing flight",
        "Airspeed sensor calibration (MS4525DO Pitot-static tube) with wind estimation matrix",
        "Dual-redundant compass calibration (external IST8310 + internal IMU magnetometers)",
        "Automated RTL (Return-to-Launch) fail-safe with emergency hover landing zones"
      ],
      avionicsStack: [
        { label: "Flight Controller", val: "Holybro Pixhawk 6C / Cube Orange+" },
        { label: "GNSS / RTK", val: "Here3+ Precision RTK GNSS (CAN Bus)" },
        { label: "Telemetry Link", val: "RFD900x Long Range 915MHz Telemetry" },
        { label: "Power Module", val: "Dual 12S Power Distribution Board (CAN Telemetry)" }
      ]
    },
    multirotor: {
      name: "High-Agility Multirotor Platforms",
      tagline: "Precision Aerial Inspection, Mapping & High-Rate FPV Drones",
      firmware: "Betaflight 4.5 & ArduCopter 4.4",
      groundControl: "Betaflight Configurator / Mission Planner",
      keyFeatures: [
        "Advanced PID & Feedforward dynamic tuning using Blackbox flight log gyro frequency analysis",
        "Bidirectional DShot600 ESC telemetry with RPM filtering for mechanical vibration notch filtering",
        "ExpressLRS (ELRS) 2.4GHz ultra-low latency RC control protocol integration",
        "Optical flow sensor & LiDAR rangefinder integration for indoor GPS-denied precision hovering"
      ],
      avionicsStack: [
        { label: "Flight Controller", val: "Matek H743-SLIM / SpeedyBee F405" },
        { label: "ESC Protocol", val: "BlHeli_32 / AM32 50A 4-in-1 DShot600" },
        { label: "RC Protocol", val: "ExpressLRS 2.4GHz (Packet Rate 500Hz)" },
        { label: "Payload Power", val: "Regulated 5V/9V BEC for Onboard Sensors" }
      ]
    },
    fixedwing: {
      name: "Long-Endurance Fixed-Wing Platforms",
      tagline: "Extended Range Autonomous Surveillance and Photogrammetry",
      firmware: "ArduPilot (ArduPlane)",
      groundControl: "Mission Planner & SITL Simulator",
      keyFeatures: [
        "Automated bungee/hand launch and skid-landing waypoint trajectories with precision glide slope",
        "TEC (Total Energy Control) pitch & throttle loop tuning for maximum battery endurance",
        "Geofencing with emergency altitude ceiling, floor, and exclusion polygon triggers",
        "Survey polygon auto-generation with camera triggering distance intervals"
      ],
      avionicsStack: [
        { label: "Flight Controller", val: "Pixhawk 4 / Cube Black" },
        { label: "Control Servos", val: "High-Torque Metal Gear Digital Servos" },
        { label: "Airspeed Tube", val: "Digital I2C Pitot Static Tube" },
        { label: "Fail-Safe Link", val: "Dual 433MHz / 868MHz Redundant Radios" }
      ]
    }
  };

  const current = platforms[activePlatform];

  return (
    <section id="avionics" className="hero-details-strip">
      <div className="hero-section-card">
        <div className="hero-section-header">
          <div>
            <div className="text-xs font-mono tracking-widest text-emerald-400 uppercase flex items-center gap-2 mb-1.5">
              <Radio size={14} />
              <span>Avionics Integration & Flight Systems</span>
            </div>
            <h2 className="hero-section-title">UAV Hardware Architecture & Configuration</h2>
          </div>

          {/* Platform Selector Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl">
            <button
              onClick={() => setActivePlatform('vtol')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activePlatform === 'vtol' 
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              VTOL Hybrid
            </button>
            <button
              onClick={() => setActivePlatform('multirotor')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activePlatform === 'multirotor' 
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Multirotors
            </button>
            <button
              onClick={() => setActivePlatform('fixedwing')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activePlatform === 'fixedwing' 
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Fixed-Wing
            </button>
          </div>
        </div>

        {/* Dynamic Platform Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4">
          {/* Left Column: Platform Specs & Firmware */}
          <div className="lg:col-span-7 space-y-4">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Plane className="text-emerald-400" size={20} />
                {current.name}
              </h3>
              <p className="text-sm text-slate-400 mt-1">{current.tagline}</p>
            </div>

            {/* Firmware & Tooling row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <div>
                <span className="text-[11px] font-mono text-slate-400 block">FIRMWARE CORE</span>
                <span className="text-sm font-semibold text-emerald-300">{current.firmware}</span>
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 block">GCS & TOOLING</span>
                <span className="text-sm font-semibold text-cyan-300">{current.groundControl}</span>
              </div>
            </div>

            {/* Key Integration Capabilities */}
            <div className="space-y-2.5 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                Integrated Capabilities & Engineering Procedures
              </span>
              <div className="space-y-2">
                {current.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Hardware & Wiring Specifications */}
          <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-xl bg-slate-900/80 border border-slate-800">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5 font-semibold">
                  <Cpu size={14} />
                  AVIONICS WIRING & HARDWARE
                </span>
                <span className="text-[11px] text-slate-400">BUS: CAN · UART · I2C</span>
              </div>

              <div className="space-y-3">
                {current.avionicsStack.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs py-1 border-b border-slate-800/60">
                    <span className="text-slate-400 font-medium">{item.label}</span>
                    <span className="font-mono text-slate-200 text-right">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400 font-mono">
                <Activity size={12} />
                MAVLink Protocol Ingestion
              </span>
              <span>100% Parameter Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvionicsSection;
