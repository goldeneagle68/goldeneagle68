const TYPES = {
  turbo_i4: {label:"Turbocharged inline-4", family:"piston", layout:"inline", units:{name:"Cylinders", min:4, max:4, step:1, def:4}, displacement:true, compression:true, extra1:{name:"Boost pressure", min:0, max:2.5, step:0.1, def:1.2, suffix:" bar"}, extra2:{name:"Turbo size", min:40, max:90, step:1, def:62, suffix:" mm"}, rev:{min:4500,max:8500,step:100,def:7200}},
  turbo_v6: {label:"Turbocharged V6", family:"piston", layout:"v", units:{name:"Cylinders", min:6, max:6, step:1, def:6}, displacement:true, compression:true, extra1:{name:"Boost pressure", min:0, max:2.8, step:0.1, def:1.4, suffix:" bar"}, extra2:{name:"Turbo size", min:45, max:95, step:1, def:68, suffix:" mm"}, rev:{min:4500,max:8500,step:100,def:7000}},
  twin_turbo_v8: {label:"Twin-turbo V8", family:"piston", layout:"v", units:{name:"Cylinders", min:8, max:8, step:1, def:8}, displacement:true, compression:true, extra1:{name:"Boost pressure", min:0, max:3.0, step:0.1, def:1.6, suffix:" bar"}, extra2:{name:"Turbo pair size", min:45, max:100, step:1, def:72, suffix:" mm"}, rev:{min:4500,max:9000,step:100,def:7600}},
  mild_hybrid: {label:"48V mild hybrid", family:"piston", layout:"inline", units:{name:"Cylinders", min:3, max:6, step:1, def:4}, displacement:true, compression:true, extra1:{name:"Electric assist", min:0, max:80, step:5, def:25, suffix:" hp"}, extra2:{name:"Battery charge", min:0, max:100, step:1, def:70, suffix:"%"}, rev:{min:4000,max:8000,step:100,def:6500}},
  full_hybrid: {label:"Full hybrid", family:"piston", layout:"inline", units:{name:"Cylinders", min:3, max:6, step:1, def:4}, displacement:true, compression:true, extra1:{name:"Electric assist", min:20, max:160, step:5, def:85, suffix:" hp"}, extra2:{name:"Battery charge", min:0, max:100, step:1, def:80, suffix:"%"}, rev:{min:4000,max:8000,step:100,def:6200}},
  plug_in_hybrid: {label:"Plug-in hybrid", family:"piston", layout:"inline", units:{name:"Cylinders", min:3, max:8, step:1, def:4}, displacement:true, compression:true, extra1:{name:"Electric assist", min:50, max:300, step:5, def:180, suffix:" hp"}, extra2:{name:"Battery charge", min:0, max:100, step:1, def:90, suffix:"%"}, rev:{min:4000,max:8500,step:100,def:6800}},
  fuel_cell: {label:"Hydrogen fuel cell", family:"electric", layout:"electric", units:{name:"Drive motors", min:1, max:4, step:1, def:2}, displacement:false, compression:false, extra1:{name:"Stack power", min:80, max:500, step:10, def:220, suffix:" kW"}, extra2:{name:"H₂ tank pressure", min:350, max:700, step:50, def:700, suffix:" bar"}, rev:{min:8000,max:22000,step:100,def:16000}},
  inline:   {label:"Inline piston", family:"piston", layout:"inline", units:{name:"Cylinders", min:3, max:8, step:1, def:4}, displacement:true, compression:true, extra1:null, extra2:null, rev:{min:4500,max:9000,step:100,def:7000}},
  v:        {label:"V piston", family:"piston", layout:"v", units:{name:"Cylinders", min:4, max:12, step:1, def:8}, displacement:true, compression:true, extra1:null, extra2:null, rev:{min:4500,max:9000,step:100,def:7000}},
  w:        {label:"W piston", family:"piston", layout:"w", units:{name:"Cylinders", min:8, max:16, step:1, def:12}, displacement:true, compression:true, extra1:null, extra2:null, rev:{min:4500,max:9000,step:100,def:6800}},
  flat:     {label:"Flat / boxer piston", family:"piston", layout:"flat", units:{name:"Cylinders", min:4, max:12, step:1, def:6}, displacement:true, compression:true, extra1:null, extra2:null, rev:{min:4500,max:9500,step:100,def:7600}},
  vr:       {label:"VR narrow-angle piston", family:"piston", layout:"vr", units:{name:"Cylinders", min:5, max:8, step:1, def:6}, displacement:true, compression:true, extra1:{name:"Bank angle", min:10, max:20, step:1, def:15, suffix:"°"}, extra2:null, rev:{min:4500,max:9000,step:100,def:7200}},
  single:   {label:"Single-cylinder", family:"piston", layout:"inline", units:{name:"Cylinders", min:1, max:1, step:1, def:1}, displacement:true, compression:true, extra1:null, extra2:null, rev:{min:3000,max:9000,step:100,def:6500}},
  parallel_twin:{label:"Parallel twin", family:"piston", layout:"inline", units:{name:"Cylinders", min:2, max:2, step:1, def:2}, displacement:true, compression:true, extra1:{name:"Crank angle", min:180, max:360, step:90, def:270, suffix:"°"}, extra2:null, rev:{min:4000,max:10000,step:100,def:8500}},
  straight_twin:{label:"Straight twin", family:"piston", layout:"inline", units:{name:"Cylinders", min:2, max:2, step:1, def:2}, displacement:true, compression:true, extra1:null, extra2:null, rev:{min:3500,max:9000,step:100,def:7000}},
  straight_three:{label:"Straight three", family:"piston", layout:"inline", units:{name:"Cylinders", min:3, max:3, step:1, def:3}, displacement:true, compression:true, extra1:null, extra2:null, rev:{min:4500,max:9000,step:100,def:7000}},
  straight_four:{label:"Straight four", family:"piston", layout:"inline", units:{name:"Cylinders", min:4, max:4, step:1, def:4}, displacement:true, compression:true, extra1:null, extra2:null, rev:{min:4500,max:10000,step:100,def:7200}},
  straight_five:{label:"Straight five", family:"piston", layout:"inline", units:{name:"Cylinders", min:5, max:5, step:1, def:5}, displacement:true, compression:true, extra1:null, extra2:null, rev:{min:4500,max:9000,step:100,def:7000}},
  straight_six:{label:"Straight six", family:"piston", layout:"inline", units:{name:"Cylinders", min:6, max:6, step:1, def:6}, displacement:true, compression:true, extra1:null, extra2:null, rev:{min:4500,max:8500,step:100,def:7000}},
  straight_eight:{label:"Straight eight", family:"piston", layout:"inline", units:{name:"Cylinders", min:8, max:8, step:1, def:8}, displacement:true, compression:true, extra1:null, extra2:null, rev:{min:3000,max:6500,step:100,def:5200}},
  v_twin:   {label:"V-twin", family:"piston", layout:"v", units:{name:"Cylinders", min:2, max:2, step:1, def:2}, displacement:true, compression:true, extra1:{name:"V angle", min:45, max:90, step:1, def:60, suffix:"°"}, extra2:null, rev:{min:3000,max:8000,step:100,def:6200}},
  v4:       {label:"V4", family:"piston", layout:"v", units:{name:"Cylinders", min:4, max:4, step:1, def:4}, displacement:true, compression:true, extra1:{name:"V angle", min:45, max:90, step:1, def:60, suffix:"°"}, extra2:null, rev:{min:4500,max:9500,step:100,def:7600}},
  v6:       {label:"V6", family:"piston", layout:"v", units:{name:"Cylinders", min:6, max:6, step:1, def:6}, displacement:true, compression:true, extra1:{name:"V angle", min:45, max:90, step:1, def:60, suffix:"°"}, extra2:null, rev:{min:4500,max:8500,step:100,def:7000}},
  v8:       {label:"V8", family:"piston", layout:"v", units:{name:"Cylinders", min:8, max:8, step:1, def:8}, displacement:true, compression:true, extra1:{name:"V angle", min:60, max:90, step:1, def:90, suffix:"°"}, extra2:null, rev:{min:4500,max:8500,step:100,def:7000}},
  v10:      {label:"V10", family:"piston", layout:"v", units:{name:"Cylinders", min:10, max:10, step:1, def:10}, displacement:true, compression:true, extra1:{name:"V angle", min:60, max:90, step:1, def:72, suffix:"°"}, extra2:null, rev:{min:6000,max:9500,step:100,def:8500}},
  v12:      {label:"V12", family:"piston", layout:"v", units:{name:"Cylinders", min:12, max:12, step:1, def:12}, displacement:true, compression:true, extra1:{name:"V angle", min:55, max:75, step:1, def:60, suffix:"°"}, extra2:null, rev:{min:4500,max:8500,step:100,def:7000}},
  v16:      {label:"V16", family:"piston", layout:"v", units:{name:"Cylinders", min:16, max:16, step:1, def:16}, displacement:true, compression:true, extra1:{name:"V angle", min:45, max:90, step:1, def:45, suffix:"°"}, extra2:null, rev:{min:3500,max:7000,step:100,def:6000}},
  h_engine: {label:"H engine", family:"piston", layout:"h", units:{name:"Cylinders", min:8, max:24, step:2, def:16}, displacement:true, compression:true, extra1:{name:"Twin crankshafts", min:2, max:2, step:1, def:2, suffix:""}, extra2:null, rev:{min:3500,max:7500,step:100,def:6200}},
  u_engine: {label:"U engine", family:"piston", layout:"u", units:{name:"Cylinders", min:4, max:16, step:2, def:8}, displacement:true, compression:true, extra1:{name:"Twin banks", min:2, max:2, step:1, def:2, suffix:""}, extra2:null, rev:{min:3000,max:7500,step:100,def:6000}},
  x_engine: {label:"X engine", family:"piston", layout:"x", units:{name:"Cylinders", min:8, max:24, step:4, def:16}, displacement:true, compression:true, extra1:{name:"Banks", min:4, max:4, step:1, def:4, suffix:""}, extra2:null, rev:{min:3000,max:7000,step:100,def:5600}},
  opposed_piston:{label:"Opposed-piston diesel", family:"piston", layout:"opposed", units:{name:"Cylinders", min:2, max:12, step:2, def:6}, displacement:true, compression:true, extra1:{name:"Opposed pistons", min:2, max:2, step:1, def:2, suffix:"/cyl"}, extra2:null, rev:{min:2500,max:6000,step:100,def:4200}},
  diesel:   {label:"Diesel piston", family:"piston", layout:"inline", units:{name:"Cylinders", min:3, max:16, step:1, def:6}, displacement:true, compression:true, extra1:{name:"Injection pressure", min:800, max:3000, step:100, def:1800, suffix:" bar"}, extra2:null, rev:{min:2500,max:6000,step:100,def:4800}},
  hemi:     {label:"Hemi V8", family:"piston", layout:"v", units:{name:"Cylinders", min:8, max:8, step:1, def:8}, displacement:true, compression:true, extra1:{name:"Hemi chamber", min:1, max:1, step:1, def:1, suffix:""}, extra2:null, rev:{min:4500,max:7500,step:100,def:6500}},
  atkinson: {label:"Atkinson cycle", family:"piston", layout:"inline", units:{name:"Cylinders", min:3, max:8, step:1, def:4}, displacement:true, compression:true, extra1:{name:"Expansion ratio", min:11, max:16, step:.1, def:13, suffix:":1"}, extra2:null, rev:{min:4000,max:7500,step:100,def:6500}},
  miller:   {label:"Miller cycle", family:"piston", layout:"inline", units:{name:"Cylinders", min:3, max:12, step:1, def:6}, displacement:true, compression:true, extra1:{name:"Valve delay", min:0, max:40, step:1, def:18, suffix:"°"}, extra2:null, rev:{min:4000,max:8000,step:100,def:6800}},
  sleeve_valve:{label:"Sleeve-valve piston", family:"piston", layout:"inline", units:{name:"Cylinders", min:4, max:24, step:2, def:12}, displacement:true, compression:true, extra1:{name:"Sleeve timing", min:0, max:30, step:1, def:12, suffix:"°"}, extra2:null, rev:{min:2500,max:5500,step:100,def:4200}},
  two_stroke:{label:"Two-stroke piston", family:"piston", layout:"inline", units:{name:"Cylinders", min:1, max:12, step:1, def:3}, displacement:true, compression:true, extra1:{name:"Port timing", min:120, max:200, step:1, def:170, suffix:"°"}, extra2:null, rev:{min:4000,max:12000,step:100,def:9000}},
  radial:   {label:"Radial piston", family:"piston", layout:"radial", units:{name:"Cylinders", min:5, max:18, step:1, def:9}, displacement:true, compression:true, extra1:{name:"Rows", min:1, max:2, step:1, def:1, suffix:" row"}, extra2:null, rev:{min:2500,max:5000,step:100,def:3600}},
  rotary_radial:{label:"Rotary radial aircraft", family:"piston", layout:"radial", units:{name:"Cylinders", min:5, max:9, step:2, def:7}, displacement:true, compression:true, extra1:{name:"Rotating crankcase", min:1, max:1, step:1, def:1, suffix:""}, extra2:null, rev:{min:900,max:2500,step:50,def:1400}},
  compound_piston:{label:"Turbo-compound piston", family:"piston", layout:"radial", units:{name:"Cylinders", min:9, max:18, step:1, def:18}, displacement:true, compression:true, extra1:{name:"Recovery turbine", min:1, max:3, step:1, def:3, suffix:""}, extra2:null, rev:{min:2500,max:4500,step:100,def:3200}},
  free_piston:{label:"Free-piston engine", family:"linear", layout:"linear", units:{name:"Modules", min:1, max:6, step:1, def:2}, displacement:true, compression:true, extra1:{name:"Stroke", min:40, max:180, step:5, def:90, suffix:" mm"}, extra2:null, rev:{min:1000,max:9000,step:100,def:5000}},
  stirling: {label:"Stirling engine", family:"external", layout:"stirling", units:{name:"Cylinders", min:1, max:8, step:1, def:2}, displacement:true, compression:false, extra1:{name:"Hot-side temp", min:300, max:900, step:10, def:650, suffix:"°C"}, extra2:{name:"Phase angle", min:60, max:120, step:1, def:90, suffix:"°"}, rev:{min:500,max:4500,step:50,def:2200}},
  steam:    {label:"Steam engine", family:"external", layout:"steam", units:{name:"Cylinders", min:1, max:6, step:1, def:2}, displacement:true, compression:false, extra1:{name:"Boiler pressure", min:5, max:30, step:1, def:14, suffix:" bar"}, extra2:{name:"Cutoff", min:10, max:80, step:1, def:40, suffix:"%"}, rev:{min:200,max:2500,step:50,def:900}},
  rotary:   {label:"Rotary Wankel", family:"rotary", layout:"rotary", units:{name:"Rotors", min:1, max:4, step:1, def:2}, displacement:true, compression:false, extra1:{name:"Port size", min:1, max:10, step:1, def:6, suffix:" step"}, extra2:null, rev:{min:6500,max:12000,step:100,def:9000}},
  quasiturbine:{label:"Quasiturbine", family:"rotary", layout:"quasi", units:{name:"Rotors", min:1, max:2, step:1, def:1}, displacement:true, compression:false, extra1:{name:"Blade articulation", min:1, max:10, step:1, def:6, suffix:""}, extra2:null, rev:{min:3500,max:10000,step:100,def:7000}},
  gerotor:  {label:"Gerotor motor", family:"hydraulic", layout:"gerotor", units:{name:"Lobes", min:4, max:12, step:1, def:7}, displacement:false, compression:false, extra1:{name:"Pressure", min:50, max:350, step:10, def:180, suffix:" bar"}, extra2:{name:"Flow", min:10, max:200, step:5, def:80, suffix:" L/min"}, rev:{min:500,max:6000,step:50,def:3000}},
  scroll:   {label:"Scroll expander", family:"external", layout:"scroll", units:{name:"Scrolls", min:1, max:4, step:1, def:2}, displacement:false, compression:false, extra1:{name:"Pressure", min:2, max:20, step:.5, def:8, suffix:" bar"}, extra2:{name:"Orbit radius", min:2, max:12, step:.5, def:6, suffix:" mm"}, rev:{min:1000,max:12000,step:100,def:6000}},
  electric: {label:"Electric motor", family:"electric", layout:"electric", units:{name:"Motors", min:1, max:4, step:1, def:2}, displacement:false, compression:false, extra1:{name:"Battery voltage", min:300, max:1000, step:50, def:800, suffix:" V"}, extra2:{name:"Pole pairs", min:2, max:12, step:1, def:6, suffix:""}, rev:{min:8000,max:22000,step:100,def:16000}},
  ac_induction:{label:"AC induction motor", family:"electric", layout:"electric", units:{name:"Motors", min:1, max:4, step:1, def:1}, displacement:false, compression:false, extra1:{name:"Voltage", min:300, max:1000, step:50, def:650, suffix:" V"}, extra2:{name:"Slip", min:1, max:8, step:.5, def:3, suffix:"%"}, rev:{min:8000,max:20000,step:100,def:14000}},
  pmsm:     {label:"Permanent magnet synchronous motor", family:"electric", layout:"electric", units:{name:"Motors", min:1, max:4, step:1, def:2}, displacement:false, compression:false, extra1:{name:"Voltage", min:300, max:1000, step:50, def:800, suffix:" V"}, extra2:{name:"Pole pairs", min:2, max:12, step:1, def:8, suffix:""}, rev:{min:10000,max:24000,step:100,def:18000}},
  bldc:     {label:"Brushless DC motor", family:"electric", layout:"electric", units:{name:"Motors", min:1, max:8, step:1, def:2}, displacement:false, compression:false, extra1:{name:"Voltage", min:48, max:800, step:12, def:400, suffix:" V"}, extra2:{name:"KV rating", min:50, max:500, step:10, def:160, suffix:" KV"}, rev:{min:8000,max:30000,step:100,def:18000}},
  brushed_dc:{label:"Brushed DC motor", family:"electric", layout:"electric", units:{name:"Motors", min:1, max:4, step:1, def:1}, displacement:false, compression:false, extra1:{name:"Voltage", min:12, max:400, step:12, def:120, suffix:" V"}, extra2:{name:"Brush wear", min:0, max:100, step:1, def:15, suffix:"%"}, rev:{min:3000,max:14000,step:100,def:8000}},
  switched_reluctance:{label:"Switched reluctance motor", family:"electric", layout:"electric", units:{name:"Motors", min:1, max:4, step:1, def:1}, displacement:false, compression:false, extra1:{name:"Voltage", min:300, max:1000, step:50, def:700, suffix:" V"}, extra2:{name:"Rotor poles", min:4, max:16, step:2, def:8, suffix:""}, rev:{min:8000,max:26000,step:100,def:18000}},
  axial_flux:{label:"Axial-flux motor", family:"electric", layout:"electric", units:{name:"Motors", min:1, max:4, step:1, def:2}, displacement:false, compression:false, extra1:{name:"Voltage", min:300, max:1000, step:50, def:800, suffix:" V"}, extra2:{name:"Disc diameter", min:180, max:500, step:10, def:320, suffix:" mm"}, rev:{min:5000,max:18000,step:100,def:12000}},
  hub_motor:{label:"Hub motor", family:"electric", layout:"electric", units:{name:"Wheel motors", min:1, max:4, step:1, def:4}, displacement:false, compression:false, extra1:{name:"Voltage", min:48, max:800, step:12, def:400, suffix:" V"}, extra2:{name:"Wheel torque", min:200, max:2000, step:50, def:900, suffix:" Nm"}, rev:{min:1000,max:6000,step:50,def:3500}},
  turbojet: {label:"Turbojet", family:"jet", layout:"turbojet", units:{name:"Compressor stages", min:4, max:16, step:1, def:10}, displacement:false, compression:false, extra1:{name:"Pressure ratio", min:5, max:40, step:1, def:18, suffix:":1"}, extra2:{name:"Nozzle area", min:40, max:120, step:1, def:75, suffix:"%"}, rev:{min:8000,max:22000,step:100,def:17000}},
  turbofan: {label:"Turbofan", family:"jet", layout:"turbofan", units:{name:"Fan stages", min:1, max:4, step:1, def:1}, displacement:false, compression:false, extra1:{name:"Bypass ratio", min:1.0, max:12.0, step:0.1, def:6.0, suffix:""}, extra2:{name:"Pressure ratio", min:10, max:60, step:1, def:32, suffix:":1"}, rev:{min:8000,max:22000,step:100,def:15000}},
  geared_turbofan:{label:"Geared turbofan", family:"jet", layout:"turbofan", units:{name:"Fan stages", min:1, max:3, step:1, def:1}, displacement:false, compression:false, extra1:{name:"Bypass ratio", min:5, max:16, step:.1, def:12, suffix:""}, extra2:{name:"Gear ratio", min:2, max:5, step:.1, def:3.1, suffix:":1"}, rev:{min:8000,max:22000,step:100,def:16000}},
  turboprop:{label:"Turboprop", family:"jet", layout:"turboprop", units:{name:"Prop blades", min:3, max:8, step:1, def:5}, displacement:false, compression:false, extra1:{name:"Prop diameter", min:2.0, max:6.0, step:0.1, def:3.6, suffix:" m"}, extra2:{name:"Gear ratio", min:6, max:20, step:0.5, def:12, suffix:":1"}, rev:{min:4000,max:14000,step:100,def:9000}},
  turboshaft:{label:"Turboshaft", family:"jet", layout:"turboshaft", units:{name:"Turbine stages", min:1, max:6, step:1, def:3}, displacement:false, compression:false, extra1:{name:"Shaft load", min:10, max:100, step:1, def:60, suffix:"%"}, extra2:{name:"Pressure ratio", min:8, max:40, step:1, def:18, suffix:":1"}, rev:{min:6000,max:18000,step:100,def:12000}},
  ramjet:{label:"Ramjet", family:"jet", layout:"ramjet", units:{name:"Intake ramps", min:1, max:4, step:1, def:2}, displacement:false, compression:false, extra1:{name:"Mach number", min:.5, max:5, step:.1, def:2.0, suffix:" M"}, extra2:{name:"Nozzle area", min:40, max:120, step:1, def:80, suffix:"%"}, rev:{min:4000,max:18000,step:100,def:12000}},
  scramjet:{label:"Scramjet", family:"jet", layout:"ramjet", units:{name:"Intake ramps", min:1, max:6, step:1, def:3}, displacement:false, compression:false, extra1:{name:"Mach number", min:3, max:12, step:.1, def:6.0, suffix:" M"}, extra2:{name:"Combustor length", min:1, max:8, step:.1, def:3.0, suffix:" m"}, rev:{min:8000,max:26000,step:100,def:18000}},
  pulsejet:{label:"Pulsejet", family:"jet", layout:"pulsejet", units:{name:"Valves", min:0, max:16, step:1, def:8}, displacement:false, compression:false, extra1:{name:"Pulse frequency", min:20, max:250, step:5, def:90, suffix:" Hz"}, extra2:{name:"Tube length", min:.5, max:5, step:.1, def:1.8, suffix:" m"}, rev:{min:1000,max:10000,step:100,def:5000}},
  rocket:{label:"Rocket engine", family:"rocket", layout:"rocket", units:{name:"Chambers", min:1, max:9, step:1, def:1}, displacement:false, compression:false, extra1:{name:"Chamber pressure", min:20, max:300, step:5, def:120, suffix:" bar"}, extra2:{name:"Mixture ratio", min:1, max:8, step:.1, def:2.6, suffix:""}, rev:{min:2000,max:20000,step:100,def:10000}}
};

const canvas = document.getElementById("sim");
const ctx = canvas.getContext("2d");
const $ = id => document.getElementById(id);
const DEFAULT_SCENE_ZOOM = .90;
const CANVAS_DPR = 1;
const STARTER_DRIVE_RPM = 820;
const STARTER_GRIND_SAMPLE_SRC = "assets/audio/metal-grinding-slow.mp3";

const state = {
  on:false,
  type:"v",
  units:8,
  displacement:4.0,
  compression:10.0,
  extra1:0,
  extra2:0,
  afterburner:false,
  throttle:0,
  gas:false,
  clutch:false,
  brake:false,
  load:35,
  fuel:1.0,
  fuelSystem:"injection",
  timing:0,
  revLimit:7000,
  rpm:0,
  temp:20,
  output:0,
  power:0,
  aux:0,
  crank:0,
  speed:0,
  aircraftSpeedCommand:0,
  gear:1,
  gearSelector:"P",
  shiftBlockedReason:"",
  lastShiftTime:0,
  shiftFromGear:1,
  gearCount:7,
  transmissionMode:"auto",
  transmissionType:"dct",
  launchControl:false,
  finalDrive:3.42,
  gearboxAnimation:true,
  starterTimer:0,
  starterEngaged:false,
  starterHoldTime:0,
  starterMotorRpm:0,
  starterMotorAngle:0,
  starterGrinding:false,
  shiftTimer:0,
  shiftDuration:0,
  virtualRatio:0,
  noteOpen:false,
  graphVisible:true,
  dynoGraphMode:"powerTorque",
  soundMode:"auto",
  soundVolume:70,
  raceResults:[],
  engineCover:"none",
  exhaustManifold:"equal_length_headers",
  intakePipeOffset:0,
  exhaustPipeOffset:0,
  pipesVisible:true,
  dyno:false,
  dynoRpm:1000,
  dynoData:[],
  turboAddon:"none",
  hybridSystem:"none",
  nuclearFission:"none",
  secondaryEngine:"none",
  systemPower:50,
  fuelTanks:true,
  scenePanX:0,
  scenePanY:0,
  sceneZoom:DEFAULT_SCENE_ZOOM,
  overlayMinimized:true,
  ecoMode:false,
  lastMatchedProfile:null,
  discoveredFamousProfiles:[],
  vehicleDrive:"rwd",
  bodyType:"coupe",
  spoilerPackage:"none",
  tireType:"street",
  tireSize:20,
  rimStyle:"alloy",
  speedLimiterEnabled:false,
  speedLimitKmh:120,
  speedLimiterActive:false,
  gaugeStyle:"classic",
  gaugeDisplayMode:"analog",
  panelMinimized:false,
  mobileMode:false,
  experienceMode:"beginner",
  buildStats:{peakPower:0, peakOutput:0, maxSpeed:0, redlineHits:0, overheated:false, tractionLimited:false, samples:0}
};

let audioCtx, osc, gain, osc2, gain2, noise, noiseGain, starterOsc, starterGain, starterGrindAudio;
let savedBuilds = [];
let lastSlowUIKey = "";
let resizeQueued = false;
let lastGaugeUITime = 0;
let lastLiveUITime = 0;
let lastPhysicsTime = 0;
let physicsAccumulator = 0;

function setTextIfChanged(el, value){
  if(!el) return;
  const text = String(value);
  if(el.textContent !== text) el.textContent = text;
}

function ensureAudioContext(){
  const AudioClass = window.AudioContext || window.webkitAudioContext;
  if(!AudioClass) return null;
  if(!audioCtx) audioCtx = new AudioClass();
  if(audioCtx.state === "suspended" && audioCtx.resume) audioCtx.resume().catch(()=>{});
  return audioCtx;
}

function resize(){
  const r = canvas.getBoundingClientRect();
  const nextW = Math.max(640, Math.floor(r.width * CANVAS_DPR));
  const nextH = Math.max(420, Math.floor(r.height * CANVAS_DPR));
  if(Math.abs(canvas.width - nextW) > 1) canvas.width = nextW;
  if(Math.abs(canvas.height - nextH) > 1) canvas.height = nextH;
}
function refreshCanvasSize(){
  if(resizeQueued) return;
  resizeQueued = true;
  requestAnimationFrame(() => {
    resizeQueued = false;
    resize();
  });
}
window.addEventListener("resize", refreshCanvasSize);
if(window.ResizeObserver){
  const canvasParent = canvas.parentElement;
  if(canvasParent) new ResizeObserver(refreshCanvasSize).observe(canvasParent);
}
refreshCanvasSize();

function beep(freq=600,dur=.06,type="sine",vol=.04){
  try{
    const ctxAudio = ensureAudioContext();
    if(!ctxAudio) return;
    const o = ctxAudio.createOscillator();
    const g = ctxAudio.createGain();
    o.type = type;
    o.frequency.value = freq;
    g.gain.value = vol;
    o.connect(g);
    g.connect(ctxAudio.destination);
    o.start();
    g.gain.exponentialRampToValueAtTime(.0001, ctxAudio.currentTime + dur);
    o.stop(ctxAudio.currentTime + dur);
  }catch(err){
    console.warn("Audio beep skipped:", err);
  }
}

function waveForType(){
  if(state.type === "electric") return "sine";
  if(state.type === "rotary") return "sine";
  if(state.type === "turbofan" || state.type === "turbojet" || state.type === "turboprop") return "sawtooth";
  if(state.type === "inline") return "triangle";
  if(state.type === "w") return "sawtooth";
  return "square";
}

function startAudio(){
  try{
    const ctxAudio = ensureAudioContext();
    if(!ctxAudio || osc) return;

    osc = ctxAudio.createOscillator();
  gain = audioCtx.createGain();
  osc.type = waveForType();
  osc.frequency.value = 40;
  gain.gain.value = .018;
  osc.connect(gain);
  gain.connect(ctxAudio.destination);
  osc.start();

  // A second quiet oscillator gives cylinders, turbines, and EVs a layered tone instead of one flat buzz.
  osc2 = ctxAudio.createOscillator();
  gain2 = ctxAudio.createGain();
  osc2.type = "triangle";
  osc2.frequency.value = 80;
  gain2.gain.value = .006;
  osc2.connect(gain2);
  gain2.connect(ctxAudio.destination);
  osc2.start();

  const b = ctxAudio.createBuffer(1, ctxAudio.sampleRate, ctxAudio.sampleRate);
  const data = b.getChannelData(0);
  for(let i=0;i<data.length;i++) data[i] = (Math.random()*2 - 1) * (i % 7 === 0 ? .55 : 1);
  noise = audioCtx.createBufferSource();
  noise.buffer = b;
  noise.loop = true;
  noiseGain = ctxAudio.createGain();
  noiseGain.gain.value = .006;
  noise.connect(noiseGain);
  noiseGain.connect(ctxAudio.destination);
  noise.start();
  }catch(err){
    console.warn("Engine audio skipped:", err);
    stopAudio();
  }
}

function stopAudio(){
  if(osc){ try{ osc.stop(); }catch(e){} osc = null; gain = null; }
  if(osc2){ try{ osc2.stop(); }catch(e){} osc2 = null; gain2 = null; }
  if(noise){ try{ noise.stop(); }catch(e){} noise = null; noiseGain = null; }
}

function ensureStarterGrindAudio(){
  if(typeof Audio === "undefined") return null;
  if(!starterGrindAudio){
    starterGrindAudio = new Audio(STARTER_GRIND_SAMPLE_SRC);
    starterGrindAudio.loop = true;
    starterGrindAudio.preload = "auto";
  }
  return starterGrindAudio;
}

function startStarterAudio(){
  try{
    const ctxAudio = ensureAudioContext();
    if(!ctxAudio || starterOsc) return;
    starterOsc = ctxAudio.createOscillator();
    starterGain = ctxAudio.createGain();
    starterOsc.type = "sawtooth";
    starterOsc.frequency.value = 90;
    starterGain.gain.value = 0;
    starterOsc.connect(starterGain);
    starterGain.connect(ctxAudio.destination);
    starterOsc.start();
    const grindAudio = ensureStarterGrindAudio();
    if(grindAudio && grindAudio.load) grindAudio.load();
  }catch(err){
    console.warn("Starter audio skipped:", err);
    stopStarterAudio();
  }
}

function stopStarterAudio(){
  if(starterOsc){ try{ starterOsc.stop(); }catch(e){} starterOsc = null; starterGain = null; }
  if(starterGrindAudio){
    try{
      starterGrindAudio.pause();
      starterGrindAudio.currentTime = 0;
    }catch(e){}
  }
}

function updateStarterAudio(){
  const cfg = getConfig();
  const active = gearboxVisualApplies(cfg) && engineIdleRpm(cfg) > 0 && (!!state.starterEngaged || (state.starterTimer || 0) > 0);
  if(!active){
    stopStarterAudio();
    return;
  }
  startStarterAudio();
  if(!starterOsc || !starterGain) return;
  const volume = Math.max(0, Math.min(1, (state.soundVolume ?? 70) / 100));
  const ecoFactor = state.ecoMode ? .45 : 1;
  const grind = !!state.starterGrinding;
  const rpm = Math.max(0, state.starterMotorRpm || 0);
  starterOsc.frequency.value = grind ? 145 + Math.random() * 38 : 74 + rpm / 8;
  starterGain.gain.value = (grind ? .026 : .018) * volume * ecoFactor;
  const grindAudio = ensureStarterGrindAudio();
  if(grindAudio){
    if(grind){
      grindAudio.volume = Math.min(1, .85 * volume * ecoFactor);
      grindAudio.playbackRate = .9 + Math.min(.35, Math.max(0, state.rpm - STARTER_DRIVE_RPM) / 2600);
      if(grindAudio.paused){
        const playPromise = grindAudio.play();
        if(playPromise && playPromise.catch) playPromise.catch(()=>{});
      }
    }else if(!grindAudio.paused){
      grindAudio.pause();
      try{ grindAudio.currentTime = 0; }catch(e){}
    }
  }
}

function getEffectiveSoundMode(){
  if(state.soundMode && state.soundMode !== "auto") return state.soundMode;
  const cfg = getConfig();
  if(cfg.family === "electric") return "electric";
  if(cfg.family === "jet") return "jet";
  if(cfg.family === "rotary") return "rotary";
  if(state.type === "diesel" || state.type === "opposed_piston") return "diesel";
  if(isTurboType()) return state.turboAddon === "supercharger" ? "supercharger" : "turbo";
  if(state.type === "v10") return "v10";
  if(state.type === "v12" || state.type === "v16" || state.type === "w") return "v12";
  if(state.type === "v8" || state.type === "hemi" || state.type === "twin_turbo_v8") return "v8";
  if(state.type === "v6" || state.type === "turbo_v6") return "v6";
  return "i4";
}

function soundProfile(mode=getEffectiveSoundMode()){
  return {
    i4:{wave:"triangle", wave2:"square", base:.90, pulse:1.85, noise:.20},
    v6:{wave:"sawtooth", wave2:"triangle", base:1.02, pulse:1.65, noise:.28},
    v8:{wave:"square", wave2:"sawtooth", base:.82, pulse:1.42, noise:.36},
    v10:{wave:"sawtooth", wave2:"triangle", base:1.35, pulse:2.25, noise:.30},
    v12:{wave:"sawtooth", wave2:"sine", base:1.22, pulse:2.05, noise:.24},
    rotary:{wave:"sine", wave2:"square", base:1.75, pulse:2.8, noise:.48},
    diesel:{wave:"square", wave2:"square", base:.62, pulse:1.15, noise:.70},
    turbo:{wave:"sawtooth", wave2:"sawtooth", base:1.08, pulse:3.2, noise:.55},
    supercharger:{wave:"square", wave2:"sawtooth", base:.94, pulse:4.1, noise:.42},
    jet:{wave:"sawtooth", wave2:"sine", base:1.55, pulse:2.4, noise:.85},
    electric:{wave:"sine", wave2:"sine", base:2.35, pulse:1.0, noise:.18}
  }[mode] || {wave:"square", wave2:"triangle", base:1, pulse:1.5, noise:.35};
}

function captureBuildState(){
  const keys = ["type","units","displacement","compression","extra1","extra2","revLimit","fuelSystem","turboAddon","hybridSystem","nuclearFission","secondaryEngine","systemPower","fuelTanks","vehicleDrive","bodyType","spoilerPackage","tireType","tireSize","rimStyle","speedLimiterEnabled","speedLimitKmh","gear","gearSelector","gearCount","transmissionMode","transmissionType","finalDrive","gearboxAnimation","gaugeStyle","gaugeDisplayMode","engineCover","exhaustManifold","intakePipeOffset","exhaustPipeOffset","pipesVisible","soundMode","soundVolume"];
  const build = {};
  keys.forEach(k => build[k] = state[k]);
  return build;
}

function applySavedBuild(build){
  if(!build) return;
  const type = build.type || state.type;
  applyTypeDefaults(type);
  Object.assign(state, build);
  syncInputsToState();
  refreshDynamicControls();
  refreshTransmissionControls();
  updateUI();
  $("warning").textContent = `Loaded build: ${build.name || type}`;
}

function loadSavedBuilds(){
  try{ savedBuilds = JSON.parse(localStorage.getItem("engineAtlasSavedBuilds") || "[]"); }
  catch(e){ savedBuilds = []; }
  renderSavedBuilds();
}

function persistSavedBuilds(){
  try{ localStorage.setItem("engineAtlasSavedBuilds", JSON.stringify(savedBuilds)); }catch(e){}
}

function saveCurrentBuild(){
  const name = ($("buildNameInput") && $("buildNameInput").value.trim()) || `${getConfig().label} build`;
  const build = captureBuildState();
  build.name = name;
  build.savedAt = new Date().toLocaleString();
  savedBuilds.unshift(build);
  savedBuilds = savedBuilds.slice(0, 12);
  persistSavedBuilds();
  renderSavedBuilds();
  $("warning").textContent = `Saved build: ${name}`;
}

function renderSavedBuilds(){
  const box = $("savedBuildList");
  if(!box) return;
  if(!savedBuilds.length){
    box.innerHTML = `<div class="savedBuildItem"><span><b>No saved builds yet</b><small>Save the current build to load it later.</small></span></div>`;
    return;
  }
  box.innerHTML = savedBuilds.map((b,i) => `<div class="savedBuildItem"><span><b>${b.name || "Saved build"}</b><small>${b.type || ""} · ${b.savedAt || ""}</small></span><button data-load-build="${i}">Load</button></div>`).join("");
}

function addRaceResult(label, value){
  if(!state.raceResults) state.raceResults = [];
  state.raceResults.unshift({label, value});
  state.raceResults = state.raceResults.slice(0, 5);
  renderRaceResults();
}

function renderRaceResults(){
  const box = $("raceTestResults");
  if(!box) return;
  if(!state.raceResults || !state.raceResults.length){
    box.innerHTML = `<div class="testResultLine"><span>Latest result</span><b>Not tested</b></div>`;
    return;
  }
  box.innerHTML = state.raceResults.map(r => `<div class="testResultLine"><span>${r.label}</span><b>${r.value}</b></div>`).join("");
}

function runRaceTest(kind){
  const cfg = getConfig();
  updateBuildStats(cfg);
  updateBuildSummary();
  if(kind === "zero"){
    addRaceResult("0–100 km/h", estimateZeroToHundred(cfg));
  }else if(kind === "quarter"){
    const hp = Math.max((state.buildStats && state.buildStats.peakPower) || state.power || 80, 80);
    const mass = Math.max(650, getVehicleSetup().mass || 1850);
    const grip = Math.max(.75, Math.min(1.55, getVehicleSetup().launchGrip || 1));
    const et = Math.max(7.2, Math.min(22, 6.29 * Math.pow(mass / hp, 1/3) / Math.pow(grip, .18)));
    addRaceResult("Quarter mile", `${et.toFixed(1)} s`);
  }else if(kind === "top"){
    addRaceResult("Top speed", estimateTopSpeed(cfg));
  }else if(kind === "lap"){
    const hp = Math.max((state.buildStats && state.buildStats.peakPower) || state.power || 80, 80);
    const setup = getVehicleSetup();
    const grip = Math.max(.7, Math.min(1.7, setup.launchGrip || 1));
    const lap = Math.max(54, Math.min(180, 112 - Math.log10(hp) * 16 - (grip-1) * 22 + (setup.drag-1) * 12));
    addRaceResult("Track lap estimate", `${lap.toFixed(1)} s`);
  }else if(kind === "aircraft"){
    if(cfg.family !== "jet") addRaceResult("Aircraft takeoff", "Needs aircraft/jet engine");
    else {
      const speed = Math.max(120, Math.min(380, aircraftMaxSpeedKmh() * .18));
      const thrust = Math.max(1, state.output || 120);
      const dist = Math.max(120, Math.min(2400, 9500 / thrust * aircraftMassFactor()));
      addRaceResult("Aircraft takeoff", `${Math.round(speed)} km/h · ${Math.round(dist)} m`);
    }
  }
  $("warning").textContent = "Race test complete. Results updated.";
}


const SELECT_INFO = {
  engineType: "Chooses the main engine family drawn in the center stage. This is the core power unit that all add-ons connect to.",
  engineCover: "Adds a visual cover over the engine in the main scene. Choose exposed, a red performance cover inspired by modern supercar engine covers, transparent, luxury black, brushed aluminum, carbon fiber, gold trim, or smoked glass.",
  exhaustManifold: "Changes how piston exhaust pipes are grouped. Use equal-length headers for long chrome tubes merging into one collector, or compact/turbo/race styles for different routing.",
  turboAddon: "Adds forced-induction hardware to the main engine. Use this to simulate extra boost, e-turbos, or compound recovery.",
  hybridSystem: "Adds electrification or hydrogen systems. Mild and full hybrids assist the shaft, while fuel cell adds a hydrogen stack and motor.",
  nuclearFission: "Experimental support module. It visually links nuclear-assisted electrical or thermal energy into the main system.",
  secondaryEngine: "Adds a second linked power unit such as an electric motor, rotary generator, jet booster, or rocket booster.",
  vehicleDrive: "Chooses which wheels receive power. RWD is lighter and higher top speed, AWD launches harder, and 4x4 is heavy but very grippy at low speed.",
  bodyType: "Changes mass, drag, and the body preview shape. Each body type now has its own silhouette, including sedan, wagon, truck, SUV, and off-road 4x4.",
  spoilerPackage: "Changes drag and downforce. Wings help traction at speed but reduce max speed; low-drag aero increases top speed.",
  transmissionType: "Changes how the gearbox behaves. DCT shifts fastest, single-clutch is slower, and CVT keeps rpm near the target band."
};


const FAMOUS_ENGINE_PROFILES = [
  {name:"Porsche 911 GT3 RS · 4.0 flat-six", type:"flat", units:6, disp:4.0, tol:.18, turbo:"none", revMin:8200, sound:{kind:"gt3", base:1.42, pulse:1.8, noise:.55}},
  {name:"Lexus LFA · 4.8 naturally aspirated V10", type:"v10", units:10, disp:4.8, tol:.22, turbo:"none", revMin:8500, sound:{kind:"lfa", base:1.75, pulse:2.2, noise:.42}},
  {name:"Lamborghini Aventador · 6.5 V12", type:"v12", units:12, disp:6.5, tol:.28, turbo:"none", revMin:8000, sound:{kind:"lamboV12", base:1.62, pulse:2.0, noise:.48}},
  {name:"Mazda RX-7 FD · 13B twin-rotor", type:"rotary", units:2, disp:1.3, tol:.45, turbo:"single", revMin:7600, sound:{kind:"rotary", base:1.95, pulse:2.8, noise:.62}},
  {name:"Nissan GT-R R35 · VR38DETT twin-turbo V6", type:"v6", units:6, disp:3.8, tol:.20, turbo:"twin", revMin:6800, sound:{kind:"gtr", base:1.18, pulse:1.45, noise:.72}},
  {name:"Toyota Supra Mk4 · 2JZ-GTE inline-six", type:"straight_six", units:6, disp:3.0, tol:.22, turbo:"single", revMin:6800, sound:{kind:"2jz", base:1.10, pulse:1.36, noise:.78}},
  {name:"Ford Mustang GT · 5.0 Coyote V8", type:"v8", units:8, disp:5.0, tol:.25, turbo:"none", revMin:7000, sound:{kind:"coyote", base:.95, pulse:1.22, noise:.58}},
  {name:"Chevrolet Corvette Z06 C7 · 6.2 supercar V8", type:"v8", units:8, disp:6.2, tol:.30, turbo:"none", revMin:6500, sound:{kind:"vette", base:.90, pulse:1.18, noise:.64}},
  {name:"Bugatti Chiron · 8.0 W16 boosted", type:"w", units:16, disp:8.0, tol:.35, turbo:"twin", revMin:6500, sound:{kind:"w16", base:1.05, pulse:1.55, noise:.85}}
];

const MISSING_FAMOUS_ENGINES = [
  {name:"Ferrari 458 Italia V8", note:"High-rev 4.5L flat-plane V8 character and intake scream.", tag:"NA V8"},
  {name:"Subaru WRX STI EJ257", note:"Unequal-length-header boxer-four rumble.", tag:"Boxer 4"},
  {name:"Mercedes-AMG One PU", note:"Road-car F1 hybrid V6 turbo system.", tag:"F1 hybrid"},
  {name:"Koenigsegg Jesko V8", note:"Extreme twin-turbo V8 with very fast rev response.", tag:"Hypercar"},
  {name:"Cummins 6BT diesel", note:"Iconic industrial straight-six diesel torque map.", tag:"Diesel"},
  {name:"Dodge Viper 8.4 V10", note:"Large-displacement V10 with low aggressive tone.", tag:"V10"}
];

const DISCOVERED_ENGINE_STORAGE_KEY = "engineAtlas.discoveredFamousProfiles.v1";

function loadDiscoveredEngineProfiles(){
  try{
    const raw = localStorage.getItem(DISCOVERED_ENGINE_STORAGE_KEY);
    if(raw){
      const parsed = JSON.parse(raw);
      if(Array.isArray(parsed)){
        const known = new Set(FAMOUS_ENGINE_PROFILES.map(p => p.name));
        state.discoveredFamousProfiles = [...new Set(parsed.filter(name => known.has(name)))];
      }
    }
  }catch(err){
    state.discoveredFamousProfiles = [];
  }
}

function saveDiscoveredEngineProfiles(){
  try{
    localStorage.setItem(DISCOVERED_ENGINE_STORAGE_KEY, JSON.stringify(state.discoveredFamousProfiles));
  }catch(err){}
}

function registerDiscoveredEngine(profile){
  if(!profile || !profile.name) return;
  if(!state.discoveredFamousProfiles.includes(profile.name)){
    state.discoveredFamousProfiles.push(profile.name);
    saveDiscoveredEngineProfiles();
  }
  renderDiscoveredEngineList();
}

function describeProfileBuild(profile){
  const turbo = profile.turbo && profile.turbo !== "none" ? `${profile.turbo} turbo` : "naturally aspirated";
  const rev = profile.revMin ? ` · ${profile.revMin.toLocaleString()}+ rpm` : "";
  return `${profile.units} units · ${profile.disp || "custom"} L · ${turbo}${rev}`;
}

function applyFamousProfileToScene(profile){
  if(!profile) return;
  const cfg = getConfig(profile.type);
  if(!cfg) return;

  const wasRunning = state.on;
  applyTypeDefaults(profile.type);

  // Exact discovered-engine build: set the same type/count/displacement/turbo/redline
  // used by the detector, then sync every control so the drawn scene matches it.
  state.units = profile.units;
  if(typeof profile.disp === "number") state.displacement = profile.disp;
  state.turboAddon = profile.turbo || "none";
  state.revLimit = Math.max(profile.revMin || cfg.rev.def, cfg.rev.def);
  state.compression = cfg.compression ? Math.max(7, Math.min(14, state.compression || 10)) : state.compression;
  state.extra1 = cfg.extra1 ? cfg.extra1.def : state.extra1;
  state.extra2 = cfg.extra2 ? cfg.extra2.def : state.extra2;
  state.afterburner = false;
  state.on = wasRunning;

  if($("turboAddon")) $("turboAddon").value = state.turboAddon;
  if($("unitsSlider")) $("unitsSlider").value = state.units;
  if($("displacement")) $("displacement").value = state.displacement;
  if($("revLimit")) $("revLimit").value = state.revLimit;

  syncInputsToState();
  refreshDynamicControls();
  refreshTransmissionControls();
  updateFamousMatchUI(profile);
  renderDiscoveredEngineList();
  updateUI();

  const toast = $("matchToast");
  const txt = $("matchToastText");
  if(txt) txt.textContent = `Loaded ${profile.name} into the scene.`;
  if(toast){ toast.classList.add("show"); setTimeout(() => toast.classList.remove("show"), 2600); }
  beep(620,.05,"triangle",.035);
}

function applyDiscoveredEngineByName(name){
  const profile = FAMOUS_ENGINE_PROFILES.find(p => p.name === name);
  applyFamousProfileToScene(profile);
}

function renderDiscoveredEngineList(){
  const list = $("discoveredEngineList");
  const count = $("discoveredEngineCount");
  const progress = $("discoveredEngineProgress");
  if(!list) return;
  const discovered = state.discoveredFamousProfiles
    .map(name => FAMOUS_ENGINE_PROFILES.find(p => p.name === name))
    .filter(Boolean);
  const total = FAMOUS_ENGINE_PROFILES.length;
  if(count) count.textContent = `${discovered.length} discovered`;
  if(progress) progress.textContent = `${discovered.length} / ${total}`;
  if(!discovered.length){
    list.innerHTML = `<p class="discoveredEmpty">Match a real engine profile to add it here. Try a 4.0 L flat-six revving above 8,200 rpm with no turbo, or a 3.8 L twin-turbo V6.</p>`;
    return;
  }
  const current = getCurrentFamousProfile();
  list.innerHTML = discovered.map(profile => {
    const active = current && current.name === profile.name ? " active" : "";
    return `<button type="button" class="discoveredItem${active}" data-profile-name="${profile.name.replace(/"/g, "&quot;")}" title="Load this exact engine into the scene"><b>${profile.name}</b><small>${describeProfileBuild(profile)}</small><span class="discoveredPill">Click to show in scene</span></button>`;
  }).join("");
}

function fuelTanksRelevant(){
  // The button can now force visual tanks on even before a tank-using module is selected.
  return true;
}

function activeTanksUsedByCurrentBuild(){
  return isFuelCellActive() || ["rotary","turbojet","turbofan","rocket"].includes(state.secondaryEngine) || state.turboAddon !== "none" || getConfig().family === "piston" || getConfig().family === "rotary" || getConfig().family === "jet" || getConfig().family === "rocket";
}

function getCurrentFamousProfile(){
  return FAMOUS_ENGINE_PROFILES.find(p => {
    if(state.type !== p.type) return false;
    if(Math.round(state.units) !== p.units) return false;
    if(typeof p.disp === "number" && Math.abs(state.displacement - p.disp) > (p.tol || .2)) return false;
    if(p.turbo && p.turbo !== "any" && state.turboAddon !== p.turbo) return false;
    if(p.revMin && state.revLimit < p.revMin) return false;
    return true;
  }) || null;
}

function updateFamousMatchUI(profile){
  const match = profile || getCurrentFamousProfile();
  const out = $("famousMatchOut");
  const snd = $("famousSoundOut");
  if(out) out.textContent = match ? `🎉 Perfect match: ${match.name}` : "No perfect famous-car match yet";
  if(snd) snd.textContent = match ? `Sound profile: synthesized, inspired by ${match.name}` : "Sound profile: custom sandbox synth";
  if(match) registerDiscoveredEngine(match);
  if(match && state.lastMatchedProfile !== match.name){
    state.lastMatchedProfile = match.name;
    const toast = $("matchToast");
    const txt = $("matchToastText");
    if(txt) txt.textContent = `Congratulations! You matched ${match.name}.`;
    if(toast){ toast.classList.add("show"); setTimeout(() => toast.classList.remove("show"), 4200); }
    beep(760,.08,"triangle",.05); setTimeout(()=>beep(980,.08,"triangle",.04),90); setTimeout(()=>beep(1180,.10,"sine",.035),180);
  }
  if(!match) state.lastMatchedProfile = null;
}

function renderMissingEngineGallery(){
  const box = $("missingEngineGallery");
  if(!box || box.dataset.ready) return;
  box.dataset.ready = "1";
  box.innerHTML = MISSING_FAMOUS_ENGINES.map((item, i) => {
    const hue = 210 + i*22;
    return `<div class="garageCard">
      <div class="garageImage">
        <svg viewBox="0 0 260 100" role="img" aria-label="${item.name} illustration">
          <defs><linearGradient id="g${i}" x1="0" x2="1"><stop offset="0" stop-color="hsl(${hue},45%,18%)"/><stop offset="1" stop-color="hsl(${hue+40},54%,34%)"/></linearGradient></defs>
          <rect width="260" height="100" fill="url(#g${i})"/>
          <path d="M28 70 C50 38,88 35,118 49 C142 25,197 27,228 68" fill="none" stroke="rgba(255,255,255,.78)" stroke-width="8" stroke-linecap="round"/>
          <circle cx="70" cy="72" r="13" fill="rgba(255,255,255,.9)"/><circle cx="190" cy="72" r="13" fill="rgba(255,255,255,.9)"/>
          <rect x="84" y="42" width="90" height="28" rx="9" fill="rgba(0,0,0,.28)" stroke="rgba(255,255,255,.35)"/>
          <path d="M96 56 L164 56 M110 47 L110 66 M128 47 L128 66 M146 47 L146 66" stroke="#f5e4a8" stroke-width="3"/>
        </svg>
      </div>
      <div class="garageBody"><span class="garageTag">${item.tag}</span><b>${item.name}</b><small>${item.note}</small></div>
    </div>`;
  }).join("");
}

function setEcoMode(on){
  state.ecoMode = !!on;
  const ecoBtn = $("ecoModeBtn");
  if(ecoBtn){ ecoBtn.textContent = state.ecoMode ? "Eco mode on" : "Eco mode off"; ecoBtn.classList.toggle("active", state.ecoMode); }
  const ecoBadge = $("ecoBadge");
  if(ecoBadge) ecoBadge.textContent = state.ecoMode ? "Eco mode on · simplified model" : "Eco mode off";
  const welcomeEco = $("welcomeEco");
  if(welcomeEco) welcomeEco.textContent = state.ecoMode ? "Eco mode enabled" : "Enable Eco mode";
}

function refreshGraphToggle(){
  const btn = $("graphToggleBtn");
  if(!btn) return;
  btn.textContent = state.graphVisible ? "Graph on" : "Graph off";
  btn.classList.toggle("active", state.graphVisible);
  btn.setAttribute("aria-pressed", String(state.graphVisible));
}

function setGraphVisible(on){
  state.graphVisible = !!on;
  refreshGraphToggle();
}


function setExperienceMode(mode){
  state.experienceMode = mode === "beginner" ? "beginner" : "advanced";
  const app = document.querySelector(".app");
  if(app) app.classList.toggle("beginnerMode", state.experienceMode === "beginner");

  document.querySelectorAll('.head[data-section="transmission"], .head[data-section="tuning"], .head[data-section="dyno"], .head[data-section="missingGarage"]').forEach(head => {
    const section = head.closest(".section");
    if(section) section.classList.toggle("advancedSection", state.experienceMode === "beginner");
  });

  if(state.experienceMode === "beginner"){
    state.transmissionMode = "auto";
    state.transmissionType = "dct";
    state.launchControl = false;
    state.graphVisible = false;
    state.gaugeDisplayMode = "digital";
    if($("autoModeBtn")) $("autoModeBtn").classList.add("active");
    if($("manualModeBtn")) $("manualModeBtn").classList.remove("active");
    if(typeof refreshGraphToggle === "function") refreshGraphToggle();
    if($("gaugeDisplayMode")) $("gaugeDisplayMode").value = "digital";
    if($("transmissionType")) $("transmissionType").value = state.transmissionType;
    if(typeof refreshTransmissionControls === "function") refreshTransmissionControls();
    if(typeof applyGaugeDisplayMode === "function") applyGaugeDisplayMode();
  }

  const beginnerBtn = $("welcomeBeginner");
  const advancedBtn = $("welcomeAdvanced");
  if(beginnerBtn) beginnerBtn.classList.toggle("active", state.experienceMode === "beginner");
  if(advancedBtn) advancedBtn.classList.toggle("active", state.experienceMode !== "beginner");
  updateUI();
}

function closeWelcomeWithMode(mode){
  const chosenMode = mode || state.experienceMode || "beginner";
  const welcome = $("welcomeScreen");
  if(welcome) welcome.classList.add("hide");
  try{
    setExperienceMode(chosenMode);
  }catch(err){
    console.warn("Could not apply experience mode:", err);
    state.experienceMode = chosenMode;
  }
  beep(chosenMode === "beginner" ? 620 : 780, .05, "triangle", .035);
}

function setMobileMode(on){
  state.mobileMode = !!on;
  const stage = document.querySelector('.stage');
  if(stage) stage.classList.toggle('mobileMode', state.mobileMode);
  const btn = $("mobileModeBtn");
  if(btn){ btn.textContent = state.mobileMode ? "Mobile mode on" : "Mobile mode off"; btn.classList.toggle("active", state.mobileMode); }
  updateSceneQuickControlsVisibility();
}

function setPanelMinimized(on){
  state.panelMinimized = !!on;
  const app = document.querySelector('.app');
  const panel = document.querySelector('.panel');
  const stage = document.querySelector('.stage');

  if(app){
    app.classList.toggle('panelMinimized', state.panelMinimized);
    // Inline fallback keeps older/mobile browsers from getting stuck in the hidden-panel layout.
    app.style.gridTemplateColumns = state.panelMinimized ? "minmax(0,1fr)" : "";
  }
  if(panel){
    panel.style.display = state.panelMinimized ? "none" : "";
    panel.style.width = state.panelMinimized ? "0px" : "";
    panel.style.opacity = state.panelMinimized ? "0" : "";
    panel.style.padding = state.panelMinimized ? "0" : "";
  }
  if(stage){
    stage.style.width = state.panelMinimized ? "100%" : "";
    stage.style.borderRight = state.panelMinimized ? "0" : "";
  }

  const btn = $("panelMinBtn");
  if(btn){ btn.textContent = state.panelMinimized ? "Panel minimized" : "Minimize this panel"; btn.classList.toggle("active", state.panelMinimized); }
  const restore = $("restorePanelBtn");
  if(restore){
    restore.classList.toggle("hide", !state.panelMinimized);
    restore.hidden = !state.panelMinimized;
    restore.disabled = false;
    restore.setAttribute("aria-hidden", String(!state.panelMinimized));
    restore.style.display = state.panelMinimized ? "inline-flex" : "";
    restore.style.pointerEvents = "auto";
  }
  updateSceneQuickControlsVisibility();
  refreshCanvasSize();
}

function restorePanelMenus(e){
  if(e){
    e.preventDefault();
    e.stopPropagation();
    if(e.stopImmediatePropagation) e.stopImmediatePropagation();
  }
  setPanelMinimized(false);
}

function updateSceneQuickControlsVisibility(){
  const pad = $("sceneDrivePad");
  if(pad) pad.classList.toggle("hide", !(state.panelMinimized && state.mobileMode));
}

function toggleOverlayInfo(force){
  state.overlayMinimized = typeof force === "boolean" ? force : !state.overlayMinimized;
  const overlay = $("overlayInfo");
  if(overlay) overlay.classList.toggle("collapsed", state.overlayMinimized);
  const btn = $("overlayToggle");
  if(btn) btn.textContent = state.overlayMinimized ? "Show info cards" : "Minimize info cards";
}

function setAllMenus(collapsed){
  document.querySelectorAll('.panel .body').forEach(sec => { sec.style.display = collapsed ? "none" : "grid"; });
}

function initSelectInfo(){
  Object.entries(SELECT_INFO).forEach(([id, msg]) => {
    const el = $(id);
    if(!el || el.dataset.infoBound) return;
    const row = document.createElement('div');
    row.className = 'selectInfoRow';
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'infoBtn';
    btn.textContent = 'i';
    btn.setAttribute('aria-label', 'Information about ' + id);
    const bubble = document.createElement('div');
    bubble.className = 'infoBubble';
    bubble.textContent = msg;
    btn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      document.querySelectorAll('.infoBubble.open').forEach(n => { if(n !== bubble) n.classList.remove('open'); });
      bubble.classList.toggle('open');
    };
    row.appendChild(btn);
    row.appendChild(bubble);
    el.insertAdjacentElement('afterend', row);
    el.dataset.infoBound = '1';
  });
  document.addEventListener('click', e => {
    if(!e.target.closest('.selectInfoRow')) document.querySelectorAll('.infoBubble.open').forEach(n => n.classList.remove('open'));
  });
}

function startWelcomeLetter(){
  const titleEl = $("welcomeTitle");
  const bodyEl = $("welcomeText");
  if(!titleEl || !bodyEl) return;
  const title = "WELCOME";
  const body = "Welcome to Luxury Minimalist Engine Atlas. Choose Beginner or Advanced, then press Start simulator. Beginner gives you a short how-to and a simpler dashboard: pick an engine, press Start Engine, use Gas/Brake or the throttle slider, and watch the gauges. Advanced unlocks every transmission, dyno, tire, theme, premium add-on, and discovery control.";
  titleEl.textContent = "";
  bodyEl.textContent = "";
  let i = 0, j = 0;
  const titleTimer = setInterval(() => {
    titleEl.textContent = title.slice(0, ++i);
    if(i >= title.length){
      clearInterval(titleTimer);
      const bodyTimer = setInterval(() => {
        bodyEl.textContent = body.slice(0, ++j);
        if(j >= body.length) clearInterval(bodyTimer);
      }, 12);
    }
  }, 70);
}

function getConfig(type=state.type){
  return TYPES[type];
}

function applyTypeDefaults(type){
  const cfg = getConfig(type);
  if(state.type !== type && typeof resetBuildStats === "function") state.buildStats = makeEmptyBuildStats();
  const previousAircraftMode = isAircraftEngine(state.type);
  state.type = type;
  const nextAircraftMode = isAircraftEngine(type);
  if(previousAircraftMode !== nextAircraftMode){
    state.bodyType = nextAircraftMode ? "light_aircraft" : "coupe";
    state.spoilerPackage = "none";
  }
  state.units = cfg.units.def;
  state.displacement = 4.0;
  state.compression = 10.0;
  state.extra1 = cfg.extra1 ? cfg.extra1.def : 0;
  state.extra2 = cfg.extra2 ? cfg.extra2.def : 0;
  state.afterburner = false;
  if(cfg.family !== "jet") state.aircraftSpeedCommand = 0;
  state.revLimit = cfg.rev.def;
  $("engineType").value = type;
  refreshBodyTypeOptions();
  syncInputsToState();
  resetTransmissionForType();
  $("finalDrive").value = state.finalDrive;
  $("transmissionType").value = state.transmissionType;
  refreshDynamicControls();
  refreshTransmissionControls();
  updateUI();
}

function syncInputsToState(){
  const cfg = getConfig();
  $("unitsSlider").min = cfg.units.min;
  $("unitsSlider").max = cfg.units.max;
  $("unitsSlider").step = cfg.units.step;
  $("unitsSlider").value = state.units;

  $("displacement").value = state.displacement;
  $("compression").value = state.compression;

  $("revLimit").min = cfg.rev.min;
  $("revLimit").max = cfg.rev.max;
  $("revLimit").step = cfg.rev.step;
  $("revLimit").value = state.revLimit;
  if($("aircraftThrottleSlider")) $("aircraftThrottleSlider").value = state.throttle;
  if($("aircraftSpeedSlider")) $("aircraftSpeedSlider").value = state.aircraftSpeedCommand || 0;
  if($("tireType")) $("tireType").value = state.tireType;
  if($("tireSize")) $("tireSize").value = state.tireSize;
  if($("rimStyle")) $("rimStyle").value = state.rimStyle;
  normalizeSpeedLimiter();
  if($("speedLimitKmh")) $("speedLimitKmh").value = state.speedLimitKmh;
  if($("gaugeStyle")) $("gaugeStyle").value = state.gaugeStyle || "classic";
  if($("gaugeDisplayMode")) $("gaugeDisplayMode").value = state.gaugeDisplayMode || "analog";
  if($("exhaustManifold")) $("exhaustManifold").value = state.exhaustManifold || "equal_length_headers";
  if($("intakePipeOffset")) $("intakePipeOffset").value = state.intakePipeOffset || 0;
  if($("exhaustPipeOffset")) $("exhaustPipeOffset").value = state.exhaustPipeOffset || 0;
  normalizeFuelSystem();
  if($("fuelSystem")) $("fuelSystem").value = state.fuelSystem;
  if(typeof state.pipesVisible !== "boolean") state.pipesVisible = true;
  if(typeof state.gearboxAnimation !== "boolean") state.gearboxAnimation = true;
  if(typeof state.starterTimer !== "number") state.starterTimer = 0;
  if(typeof state.starterEngaged !== "boolean") state.starterEngaged = false;
  if(typeof state.starterHoldTime !== "number") state.starterHoldTime = 0;
  if(typeof state.starterMotorRpm !== "number") state.starterMotorRpm = 0;
  if(typeof state.starterMotorAngle !== "number") state.starterMotorAngle = 0;
  if(typeof state.starterGrinding !== "boolean") state.starterGrinding = false;

  if(cfg.extra1){
    $("extra1").min = cfg.extra1.min;
    $("extra1").max = cfg.extra1.max;
    $("extra1").step = cfg.extra1.step;
    $("extra1").value = state.extra1;
  }
  if(cfg.extra2){
    $("extra2").min = cfg.extra2.min;
    $("extra2").max = cfg.extra2.max;
    $("extra2").step = cfg.extra2.step;
    $("extra2").value = state.extra2;
  }
}

function formatValue(v, suffix=""){
  if(Math.abs(v - Math.round(v)) < 1e-6) return `${Math.round(v)}${suffix}`;
  return `${(+v).toFixed(1)}${suffix}`;
}

function refreshDynamicControls(){
  const cfg = getConfig();

  $("unitsOut").textContent = `${cfg.units.name}: ${formatValue(state.units)}`;
  $("displacementWrap").classList.toggle("hide", !cfg.displacement);
  $("compressionWrap").classList.toggle("hide", !cfg.compression);
  $("fuelWrap").classList.toggle("hide", cfg.family === "electric");
  if($("fuelSystemWrap")) $("fuelSystemWrap").classList.toggle("hide", !fuelSystemApplies(cfg));
  if($("fuelSystemOut")) $("fuelSystemOut").textContent = fuelSystemLabel();
  $("timingWrap").classList.toggle("hide", cfg.family === "electric");
  $("afterburnerBtn").classList.toggle("hide", state.type !== "turbojet");
  if($("aircraftControls")){
    const isAircraft = cfg.family === "jet";
    $("aircraftControls").classList.toggle("hide", !isAircraft);
    if(isAircraft){
      const maxAir = aircraftMaxSpeedKmh();
      $("aircraftSpeedSlider").max = maxAir;
      $("aircraftSpeedSlider").step = maxAir > 2000 ? 50 : 10;
      state.aircraftSpeedCommand = Math.max(0, Math.min(maxAir, state.aircraftSpeedCommand || 0));
      $("aircraftSpeedSlider").value = state.aircraftSpeedCommand;
      $("aircraftThrottleSlider").value = state.throttle;
    }
  }

  if(cfg.extra1){
    $("extra1Wrap").classList.remove("hide");
    $("extra1Label").textContent = cfg.extra1.name;
    $("extra1Out").textContent = formatValue(state.extra1, cfg.extra1.suffix || "");
  }else{
    $("extra1Wrap").classList.add("hide");
  }

  if(cfg.extra2){
    $("extra2Wrap").classList.remove("hide");
    $("extra2Label").textContent = cfg.extra2.name;
    $("extra2Out").textContent = formatValue(state.extra2, cfg.extra2.suffix || "");
  }else{
    $("extra2Wrap").classList.add("hide");
  }

  $("afterburnerBtn").classList.toggle("active", state.afterburner);
  $("afterburnerBtn").textContent = state.afterburner ? "Afterburner on" : "Afterburner off";
}



function aircraftMaxSpeedKmh(type=state.type){
  if(type === "scramjet") return 6500;
  if(type === "ramjet") return 3200;
  if(type === "rocket") return 4200;
  if(type === "turbojet") return 1450;
  if(type === "turbofan" || type === "geared_turbofan") return 1100;
  if(type === "turboprop") return 720;
  if(type === "turboshaft") return 420;
  if(type === "pulsejet") return 760;
  return 1000;
}

function aircraftMassFactor(type=state.type){
  if(type === "rocket") return .72;
  if(type === "scramjet") return .92;
  if(type === "ramjet") return 1.0;
  if(type === "turbojet") return 1.05;
  if(type === "turbofan" || type === "geared_turbofan") return 1.25;
  if(type === "turboprop") return 1.45;
  if(type === "turboshaft") return 1.6;
  return 1.2;
}

function applyAircraftPhysics(thrustKn, dt){
  const maxSpeed = aircraftMaxSpeedKmh();
  const speedFrac = Math.max(0, state.speed / Math.max(1, maxSpeed));
  const massFactor = aircraftMassFactor();
  const thrustAccel = (thrustKn / Math.max(25, 120 * massFactor)) * (1 - Math.min(.58, speedFrac * .36));
  const parasiteDrag = (0.012 + state.load / 9000) * state.speed * state.speed / Math.max(300, maxSpeed);
  const inducedDrag = state.speed < 140 && getThrottle() > .15 ? (140 - state.speed) / 140 * .18 : 0;
  const brakeDrag = state.brake ? 5.5 : 0;
  let accel = thrustAccel - parasiteDrag - inducedDrag - brakeDrag;

  // Airspeed command acts like a gentle flight-speed hold, not a car gearbox.
  if(state.aircraftSpeedCommand > 0){
    const target = Math.min(maxSpeed, state.aircraftSpeedCommand);
    const error = target - state.speed;
    const commandAccel = Math.max(-4.5, Math.min(4.5, error * .018));
    accel += commandAccel * (0.35 + getThrottle() * .65);
  } else if(getThrottle() < .03) {
    accel -= .35;
  }

  state.speed = Math.max(0, Math.min(maxSpeed, state.speed + accel * dt * 12));
  if(state.speed < .2 && getThrottle() < .02 && state.aircraftSpeedCommand <= 0) state.speed = 0;
}

function transmissionApplies(cfg=getConfig()){
  return ["piston","rotary","electric","linear","external","hydraulic"].includes(cfg.family);
}

function gearboxVisualApplies(cfg=getConfig()){
  return transmissionApplies(cfg) && cfg.family !== "electric";
}

function fuelSystemApplies(cfg=getConfig()){
  return cfg.family === "piston" || cfg.family === "rotary" || ["turbofan","geared_turbofan","turboprop"].includes(state.type);
}

function normalizeFuelSystem(){
  if(state.fuelSystem !== "carburetor" && state.fuelSystem !== "injection") state.fuelSystem = "injection";
  if(!fuelSystemApplies(getConfig())) state.fuelSystem = "injection";
}

function fuelSystemLabel(){
  return state.fuelSystem === "carburetor" ? "Carburetor" : "Fuel injection";
}

function fuelSystemOutputMultiplier(cfg=getConfig()){
  if(!fuelSystemApplies(cfg)) return 1;
  return state.fuelSystem === "carburetor" ? .94 : 1.03;
}

// Road-car physics tuning. The previous aero term used km/h² with a coefficient that
// was much too large, creating an artificial top-speed wall. These values keep launch
// traction readable while letting capable builds pull to 300+ km/h when gearing allows.
const ROAD_PHYSICS = {
  maxDisplaySpeedKmh: 430,
  aeroDragKmh2: 0.0000088,
  driveForceScale: 3.05,
  topEndAssistStart: 180,
  topEndAssistMax: 1.18
};

function normalizeSpeedLimiter(){
  if(typeof state.speedLimiterEnabled !== "boolean") state.speedLimiterEnabled = false;
  const rawLimit = Number(state.speedLimitKmh);
  state.speedLimitKmh = Math.max(20, Math.min(450, Number.isFinite(rawLimit) ? Math.round(rawLimit) : 120));
  if(typeof state.speedLimiterActive !== "boolean") state.speedLimiterActive = false;
}

function speedLimiterTorqueCut(speedAbs = Math.abs(state.speed || 0)){
  normalizeSpeedLimiter();
  if(!state.speedLimiterEnabled){
    state.speedLimiterActive = false;
    return 1;
  }
  const limit = state.speedLimitKmh;
  const taperStart = limit * .92;
  if(speedAbs < taperStart){
    state.speedLimiterActive = false;
    return 1;
  }
  const over = Math.max(0, Math.min(1, (speedAbs - taperStart) / Math.max(1, limit - taperStart)));
  const cut = Math.max(0, 1 - Math.pow(over, 1.35));
  state.speedLimiterActive = speedAbs >= limit * .985 || cut < .35;
  return cut;
}

function applyElectronicSpeedLimiter(dt){
  normalizeSpeedLimiter();
  if(!state.speedLimiterEnabled){
    state.speedLimiterActive = false;
    return;
  }
  const speedAbs = Math.abs(state.speed || 0);
  const limit = state.speedLimitKmh;
  if(speedAbs <= limit){
    if(speedAbs < limit * .985) state.speedLimiterActive = false;
    return;
  }
  state.speedLimiterActive = true;
  const excess = speedAbs - limit;
  const bleed = Math.min(excess, (1.2 + excess * .45) * dt * 12);
  state.speed = Math.sign(state.speed || 1) * Math.max(limit, speedAbs - bleed);
}

function getMaxDrivenGear(){
  const setup = getGearSetup();
  return Math.max(1, setup.ratios.length - 1);
}

function projectedRpmForGear(gear, speedKmh = state.speed){
  const setup = getGearSetup();
  const ratio = (setup.ratios[gear] || 0) * state.finalDrive;
  if(!ratio) return 0;
  const wheelRadius = getConfig().family === "electric" ? .34 : .335;
  const circumference = 2 * Math.PI * wheelRadius;
  const wheelRpm = speedKmh <= 0 ? 0 : ((speedKmh * 1000 / 3600) / circumference) * 60;
  return wheelRpm * ratio;
}

function getTheoreticalTopSpeedKmh(){
  const setup = getGearSetup();
  let best = 0;
  for(let g = 1; g < setup.ratios.length; g++) best = Math.max(best, estimateGearSpeedKmh(g, state.revLimit));
  return Math.min(ROAD_PHYSICS.maxDisplaySpeedKmh, Math.max(0, best || ROAD_PHYSICS.maxDisplaySpeedKmh));
}

function getSafeGearForSpeed(speedKmh = state.speed){
  const idle = getConfig().family === "electric" ? 0 : 820;
  const maxGear = getMaxDrivenGear();
  let chosen = Math.max(1, Math.min(maxGear, state.gear || 1));
  for(let g = 1; g <= maxGear; g++){
    const rpm = projectedRpmForGear(g, speedKmh);
    if(rpm < state.revLimit * .92 && rpm > idle * .65){ chosen = g; break; }
  }
  return chosen;
}

function buildGearRatios(baseRatios, requestedCount){
  const count = Math.max(1, Math.min(10, Math.round(requestedCount || 1)));
  const ratios = [0];
  if(count === 1){
    ratios.push(baseRatios[0] || 1);
    return ratios;
  }
  const first = baseRatios[0] || 3.5;
  const last = baseRatios[baseRatios.length - 1] || .70;
  for(let i = 0; i < count; i++){
    const t = i / (count - 1);
    // Geometric spacing gives realistic close upper gears and wide low gears.
    ratios.push(first * Math.pow(last / first, t));
  }
  return ratios;
}

function getGearSetup(cfg=getConfig()){
  const requested = Math.max(1, Math.min(10, Math.round(state.gearCount || 7)));
  let baseRatios, defaultFinal, defaultCount;
  if(cfg.family === "electric"){
    if(state.type === "hub_motor"){ baseRatios = [5.8,5.8]; defaultFinal = 2.10; defaultCount = 1; }
    else if(state.type === "axial_flux"){ baseRatios = [6.4,3.6]; defaultFinal = 2.20; defaultCount = 2; }
    else { baseRatios = [6.8,3.8]; defaultFinal = 2.15; defaultCount = 2; }
  } else if(cfg.family === "rotary"){
    baseRatios = [3.76,2.27,1.65,1.24,1.00,0.84]; defaultFinal = 3.55; defaultCount = 6;
  } else if(cfg.family === "piston"){
    if(state.type === "diesel" || state.type === "opposed_piston"){
      baseRatios = [4.10,2.37,1.56,1.16,0.86,0.67]; defaultFinal = 3.10; defaultCount = 6;
    } else if(state.type === "v10" || state.type === "v12" || state.type === "v16" || state.type === "hemi"){
      baseRatios = [3.30,2.10,1.52,1.19,1.00,0.84,0.68]; defaultFinal = 2.85; defaultCount = 7;
    } else {
      baseRatios = [3.82,2.29,1.56,1.18,0.97,0.82,0.67]; defaultFinal = 3.05; defaultCount = 7;
    }
  } else if(cfg.family === "linear" || cfg.family === "external" || cfg.family === "hydraulic"){
    baseRatios = [3.20,1.84,1.18,0.90]; defaultFinal = 2.85; defaultCount = 4;
  } else {
    return {ratios:[0], defaultFinal:1, label:"Direct", defaultCount:0};
  }
  const count = Math.max(1, Math.min(10, requested || defaultCount));
  return {ratios:buildGearRatios(baseRatios, count), defaultFinal, label:`${count}-speed`, defaultCount};
}

function resetTransmissionForType(){
  const cfg = getConfig();
  const setup = getGearSetup(cfg);
  state.gearCount = Math.max(1, Math.min(10, Math.round(state.gearCount || setup.defaultCount || Math.max(1, setup.ratios.length - 1))));
  state.finalDrive = setup.defaultFinal;
  state.gear = transmissionApplies(cfg) ? 1 : 0;
  state.gearSelector = transmissionApplies(cfg) ? "P" : "N";
  state.shiftBlockedReason = "";
  state.shiftFromGear = state.gear || 1;
  state.shiftTimer = 0;
  state.shiftDuration = 0;
  state.speed = 0;
  state.virtualRatio = setup.ratios[1] || 1;
}

function normalizeGearSelector(){
  if(!transmissionApplies(getConfig())) return "N";
  if(!["P","R","N","D"].includes(state.gearSelector)) state.gearSelector = state.gear > 0 ? "D" : "N";
  return state.gearSelector;
}

function gearDisplayLabel(){
  if(!transmissionApplies(getConfig())) return "—";
  const selector = normalizeGearSelector();
  if(state.transmissionType === "cvt") return selector === "D" ? "CVT" : selector;
  if(selector === "D") return String(Math.max(1, Math.min(getMaxDrivenGear(), state.gear || 1)));
  return selector;
}

function speedDisplayText(){
  normalizeSpeedLimiter();
  return `${Math.round(state.speed)} km/h${state.speedLimiterActive ? " · LIM" : ""}`;
}

function setShiftBlocked(reason){
  state.shiftBlockedReason = reason || "";
  if(reason) beep(180, .045, "square", .018);
}

function canManualShift(){
  if(state.transmissionMode !== "manual") return true;
  if(getThrottle() > .06){ setShiftBlocked("Lift throttle"); return false; }
  if(!state.clutch){ setShiftBlocked("Press C clutch"); return false; }
  return true;
}

function setSelector(selector, opts={}){
  if(!transmissionApplies(getConfig())) return false;
  normalizeGearSelector();
  const current = state.gearSelector;
  const speedAbs = Math.abs(state.speed || 0);
  if(selector === "P" && speedAbs > 3){
    setShiftBlocked("Stop before Park");
    return false;
  }
  if(selector === "R" && speedAbs > 4){
    setShiftBlocked("Stop before Reverse");
    return false;
  }
  if(selector === "R" && current !== "N" && !opts.force){
    setShiftBlocked("Select N first");
    return false;
  }
  const fromGear = state.gear > 0 ? state.gear : (state.shiftFromGear || 1);
  state.gearSelector = selector;
  if(selector === "D" && state.gear < 1) state.gear = 1;
  if(selector === "P" || selector === "N" || selector === "R") state.gear = selector === "R" ? -1 : 0;
  if(selector !== current){
    state.shiftFromGear = fromGear;
    state.shiftDuration = state.transmissionType === "dct" ? .12 : .28;
    state.shiftTimer = state.shiftDuration;
  }
  state.lastShiftTime = performance.now ? performance.now() : Date.now();
  state.shiftBlockedReason = "";
  beep(selector === "R" ? 260 : selector === "P" ? 220 : 420, .045, "triangle", .025);
  return true;
}

function currentGearRatio(){
  const selector = normalizeGearSelector();
  if(selector === "P" || selector === "N") return 0;
  if(selector === "R"){
    const setup = getGearSetup();
    return -(setup.ratios[1] || 3.2) * state.finalDrive * .76;
  }
  if(state.transmissionType === "cvt" && transmissionApplies(getConfig())){
    return state.virtualRatio * state.finalDrive;
  }
  const setup = getGearSetup();
  if(state.gear > getMaxDrivenGear()) state.gear = getMaxDrivenGear();
  return state.gear > 0 ? (setup.ratios[state.gear] || 0) * state.finalDrive : 0;
}

function shiftTo(newGear){
  if(state.transmissionType === "cvt") return;
  const setup = getGearSetup();
  const maxGear = Math.max(1, setup.ratios.length - 1);
  const target = Math.max(1, Math.min(maxGear, newGear));
  if(target === state.gear) return;
  const old = state.gear;
  state.shiftFromGear = old > 0 ? old : 1;
  state.gear = target;
  state.gearSelector = "D";
  state.shiftBlockedReason = "";
  state.shiftDuration = state.transmissionType === "dct" ? .16 : .48;
  state.shiftTimer = state.shiftDuration;
  state.lastShiftTime = performance.now ? performance.now() : Date.now();
  beep(target > old ? 520 : 320, .05, "triangle", .03);
}

function requestShiftUp(){
  if(!transmissionApplies(getConfig())) return;
  normalizeGearSelector();
  if(state.transmissionMode === "manual" && !canManualShift()) return;
  if(state.gearSelector === "R"){ setSelector("N", {force:true}); return; }
  if(state.gearSelector === "N" || state.gearSelector === "P"){ setSelector("D", {force:true}); shiftTo(1); return; }
  if(state.transmissionType === "cvt") return;
  shiftTo((state.gear || 1) + 1);
}

function requestShiftDown(){
  if(!transmissionApplies(getConfig())) return;
  normalizeGearSelector();
  if(state.transmissionMode === "manual" && !canManualShift()) return;
  if(state.gearSelector === "P"){ setSelector("N", {force:true}); return; }
  if(state.gearSelector === "N"){ setSelector("R"); return; }
  if(state.gearSelector === "R"){ return; }
  if(state.transmissionType === "cvt"){ setSelector("N", {force:true}); return; }
  if((state.gear || 1) <= 1){ setSelector("N", {force:true}); return; }
  shiftTo(state.gear - 1);
}

function requestPark(){
  setSelector("P", {force:true});
}


const CAR_BODY_OPTIONS = [
  ["coupe", "Sports coupe"],
  ["supercar", "Supercar"],
  ["hypercar", "Hypercar ✦ Premium"],
  ["sedan", "Performance sedan"],
  ["wagon", "Performance wagon"],
  ["hatch", "Hot hatch"],
  ["suv", "SUV / crossover"],
  ["truck", "Truck / pickup"],
  ["offroad", "Off-road 4x4"],
  ["formula", "Formula prototype ✦ Premium"]
];
const AIRCRAFT_BODY_OPTIONS = [
  ["light_aircraft", "Light aircraft"],
  ["turboprop_plane", "Turboprop aircraft"],
  ["business_jet", "Business jet"],
  ["airliner", "Passenger airliner"],
  ["fighter_jet", "Fighter jet"],
  ["helicopter", "Helicopter"],
  ["uav", "UAV / drone"],
  ["rocket_plane", "Rocket plane ✦ Premium"]
];
const AIRCRAFT_ENGINE_TYPES = new Set([
  "radial", "rotary_radial", "compound_piston", "turboprop", "turboshaft",
  "turbojet", "turbofan", "geared_turbofan", "ramjet", "scramjet", "pulsejet", "rocket"
]);
function isAircraftEngine(type = state.type){
  const cfg = TYPES[type];
  return AIRCRAFT_ENGINE_TYPES.has(type) || (cfg && cfg.family === "jet");
}
function bodyOptionsForCurrentEngine(){
  return isAircraftEngine() ? AIRCRAFT_BODY_OPTIONS : CAR_BODY_OPTIONS;
}
function refreshBodyTypeOptions(){
  const select = $("bodyType");
  if(!select) return;
  const options = bodyOptionsForCurrentEngine();
  const valid = new Set(options.map(([value]) => value));
  if(!valid.has(state.bodyType)) state.bodyType = options[0][0];
  const desiredHtml = options.map(([value, label]) => `<option value="${value}">${label}</option>`).join("");
  if(select.innerHTML !== desiredHtml) select.innerHTML = desiredHtml;
  select.value = state.bodyType;

  const summary = $("vehicleSummary");
  if(summary && isAircraftEngine()) summary.textContent = "Aircraft body mode";
}

const VEHICLE_DRIVES = {
  fwd:{label:"FWD", mass:-35, grip:.94, lowGrip:.88, loss:.91, drag:.99, note:"light, efficient, front traction limited"},
  rwd:{label:"RWD", mass:0, grip:1.00, lowGrip:1.00, loss:.90, drag:1.00, note:"lighter, playful, best top speed"},
  awd:{label:"AWD", mass:90, grip:1.24, lowGrip:1.32, loss:.86, drag:1.02, note:"strong launch, more drivetrain loss"},
  "4x4":{label:"4x4", mass:170, grip:1.36, lowGrip:1.48, loss:.82, drag:1.08, note:"huge low-speed grip, heavy"},
  hover:{label:"Hover", mass:120, grip:1.12, lowGrip:1.05, loss:.88, drag:.92, note:"low rolling drag, magnetic/air cushion drive"}
};
const TIRE_TYPES = {
  eco:{label:"eco tire", grip:.88, lowGrip:.82, rolling:.82, mass:-18, drag:.98, accel:.98},
  street:{label:"street tire", grip:1.00, lowGrip:1.00, rolling:1.00, mass:0, drag:1.00, accel:1.00},
  sport:{label:"sport tire", grip:1.12, lowGrip:1.08, rolling:1.06, mass:8, drag:1.01, accel:1.03},
  semi_slick:{label:"semi-slick", grip:1.28, lowGrip:1.18, rolling:1.12, mass:10, drag:1.02, accel:1.06},
  drag:{label:"drag radial", grip:1.18, lowGrip:1.42, rolling:1.18, mass:18, drag:1.03, accel:1.08},
  offroad:{label:"all-terrain", grip:1.02, lowGrip:1.22, rolling:1.28, mass:32, drag:1.06, accel:.94},
  hover_pad:{label:"hover pad", grip:1.08, lowGrip:1.04, rolling:.42, mass:40, drag:.86, accel:1.02}
};
const RIM_STYLES = {
  steel:{label:"steel wheel", mass:26, drag:1.01, accel:.96},
  alloy:{label:"alloy rim", mass:0, drag:1.00, accel:1.00},
  forged:{label:"forged rim", mass:-22, drag:.99, accel:1.04},
  carbon:{label:"carbon aero wheel", mass:-34, drag:.95, accel:1.05},
  beadlock:{label:"beadlock rim", mass:34, drag:1.06, accel:.93},
  luxury:{label:"luxury chrome rim", mass:28, drag:1.02, accel:.95},
  hover_ring:{label:"hover ring", mass:12, drag:.90, accel:1.03}
};
const BODY_TYPES = {
  coupe:{label:"sports coupe", mass:0, drag:.98, downforce:1.00, frontal:1.00, accel:1.00, color:"#93c5fd"},
  supercar:{label:"supercar", mass:-160, drag:.88, downforce:1.10, frontal:.94, accel:1.08, color:"#facc15"},
  hypercar:{label:"hypercar", mass:-260, drag:.76, downforce:1.22, frontal:.90, accel:1.14, color:"#d8bf7a"},
  sedan:{label:"performance sedan", mass:130, drag:1.05, downforce:.98, frontal:1.05, accel:.97, color:"#bfdbfe"},
  wagon:{label:"performance wagon", mass:150, drag:1.08, downforce:.98, frontal:1.07, accel:.95, color:"#a5d8ff"},
  hatch:{label:"hot hatch", mass:-40, drag:1.08, downforce:.96, frontal:1.03, accel:1.02, color:"#86efac"},
  suv:{label:"SUV", mass:360, drag:1.28, downforce:.92, frontal:1.23, accel:.88, color:"#a7f3d0"},
  truck:{label:"truck", mass:520, drag:1.38, downforce:.88, frontal:1.32, accel:.82, color:"#fde68a"},
  offroad:{label:"off-road 4x4", mass:430, drag:1.45, downforce:.86, frontal:1.35, accel:.78, color:"#c4b5fd"},
  formula:{label:"formula prototype", mass:-520, drag:1.05, downforce:1.92, frontal:.72, accel:1.28, color:"#fca5a5"},
  light_aircraft:{label:"light aircraft", mass:-460, drag:.86, downforce:.70, frontal:.76, accel:1.08, color:"#bae6fd"},
  turboprop_plane:{label:"turboprop aircraft", mass:-260, drag:.92, downforce:.74, frontal:.86, accel:1.02, color:"#bfdbfe"},
  business_jet:{label:"business jet", mass:120, drag:.78, downforce:.64, frontal:.92, accel:1.05, color:"#c7d2fe"},
  airliner:{label:"passenger airliner", mass:760, drag:.96, downforce:.58, frontal:1.22, accel:.78, color:"#dbeafe"},
  fighter_jet:{label:"fighter jet", mass:-120, drag:.66, downforce:.82, frontal:.70, accel:1.22, color:"#fca5a5"},
  helicopter:{label:"helicopter", mass:80, drag:1.42, downforce:.52, frontal:1.18, accel:.86, color:"#fde68a"},
  uav:{label:"UAV / drone", mass:-620, drag:.72, downforce:.68, frontal:.54, accel:1.18, color:"#bbf7d0"},
  rocket_plane:{label:"rocket plane", mass:-220, drag:.58, downforce:.76, frontal:.62, accel:1.34, color:"#fecdd3"}
};
const SPOILER_PACKAGES = {
  none:{label:"no spoiler", mass:0, drag:1.00, downforce:1.00, top:.00},
  lip:{label:"lip spoiler", mass:8, drag:1.02, downforce:1.08, top:-.01},
  wing:{label:"GT wing", mass:28, drag:1.12, downforce:1.28, top:-.06},
  active:{label:"active aero", mass:34, drag:.98, downforce:1.35, top:.02},
  drag:{label:"low-drag kit", mass:18, drag:.88, downforce:.94, top:.07},
  offroad:{label:"roof rack kit", mass:65, drag:1.24, downforce:.90, top:-.09}
};
function getVehicleSetup(){
  const drive = VEHICLE_DRIVES[state.vehicleDrive] || VEHICLE_DRIVES.rwd;
  const body = BODY_TYPES[state.bodyType] || BODY_TYPES.coupe;
  const spoiler = SPOILER_PACKAGES[state.spoilerPackage] || SPOILER_PACKAGES.none;
  const tire = TIRE_TYPES[state.tireType] || TIRE_TYPES.street;
  const rim = RIM_STYLES[state.rimStyle] || RIM_STYLES.alloy;
  const tireSize = Math.max(13, Math.min(24, state.tireSize || 20));
  const sizeMass = (tireSize - 20) * 4;
  const sizeGrip = 1 + (tireSize - 20) * .012;
  const sizeRolling = 1 + Math.max(0, tireSize - 20) * .018 - Math.max(0, 20 - tireSize) * .012;
  const hoverMode = state.vehicleDrive === "hover" || state.tireType === "hover_pad" || state.rimStyle === "hover_ring";
  const mass = Math.max(620, 1850 + state.load * 8 + drive.mass + body.mass + spoiler.mass + tire.mass + rim.mass + sizeMass);
  const drag = Math.max(.40, drive.drag * body.drag * body.frontal * spoiler.drag * tire.drag * rim.drag * (hoverMode ? .92 : 1));
  const downforce = body.downforce * spoiler.downforce;
  const speedGrip = 1 + Math.min(.42, (state.speed / 260) * (downforce - 1) * .55);
  const launchGrip = (state.speed < 35 ? drive.lowGrip * tire.lowGrip : drive.grip * tire.grip) * sizeGrip * speedGrip;
  const drivelineEff = drive.loss;
  const accelFactor = body.accel * tire.accel * rim.accel * (hoverMode ? 1.04 : 1);
  const rollingFactor = Math.max(.35, tire.rolling * sizeRolling * (hoverMode ? .45 : 1));
  return {drive, body, spoiler, tire, rim, tireSize, hoverMode, mass, drag, downforce, launchGrip, drivelineEff, accelFactor, rollingFactor};
}
function getVehiclePreviewSvg(bodyType, spoiler, c, setup){
  const spoilerSvg = (type) => {
    if(type === "none") return "";
    // Rear of the preview car is on the LEFT side, so spoilers belong there.
    if(type === "lip") return `<path d="M26 66 L56 60" stroke="#d8bf7a" stroke-width="4" stroke-linecap="round"/>`;
    if(type === "wing") return `<path d="M54 60 L50 36 M78 56 L72 34" stroke="#d8bf7a" stroke-width="4" stroke-linecap="round"/><rect x="40" y="28" width="54" height="8" rx="3" fill="#d8bf7a"/>`;
    if(type === "active") return `<path d="M52 58 L48 34 M78 54 L72 30" stroke="#d8bf7a" stroke-width="4" stroke-linecap="round"/><rect x="36" y="24" width="62" height="9" rx="3" fill="#d8bf7a"/><path d="M36 24 Q66 14 98 24" stroke="#fff4bf" stroke-width="2" fill="none"/>`;
    if(type === "drag") return `<path d="M28 76 C96 86,228 86,298 74" stroke="#93c5fd" stroke-width="3" fill="none" stroke-dasharray="5 4"/>`;
    if(type === "offroad") return `<rect x="112" y="16" width="102" height="8" rx="3" fill="#d8bf7a"/><path d="M120 24 L114 42 M206 24 L214 42" stroke="#d8bf7a" stroke-width="3"/>`;
    return "";
  };
  const aircraftBody = AIRCRAFT_BODY_OPTIONS.some(([value]) => value === bodyType);
  const rimColor = setup.rim && setup.rim.label.includes("carbon") ? "#111827" : setup.rim && setup.rim.label.includes("chrome") ? "#d1d5db" : setup.rim && setup.rim.label.includes("forged") ? "#d8bf7a" : "#e5eef8";
  const wheelR = Math.max(12, Math.min(19, 11 + (setup.tireSize || 20) * .22));
  const wheelSvg = aircraftBody ? "" : setup.hoverMode
    ? `<ellipse cx="88" cy="82" rx="26" ry="8" fill="none" stroke="#93c5fd" stroke-width="4"/><ellipse cx="238" cy="82" rx="26" ry="8" fill="none" stroke="#93c5fd" stroke-width="4"/>`
    : `<circle cx="88" cy="79" r="${wheelR}" fill="#0b0f14" stroke="${rimColor}" stroke-width="4"/><circle cx="238" cy="79" r="${wheelR}" fill="#0b0f14" stroke="${rimColor}" stroke-width="4"/><circle cx="88" cy="79" r="${Math.max(4,wheelR-9)}" fill="${rimColor}"/><circle cx="238" cy="79" r="${Math.max(4,wheelR-9)}" fill="${rimColor}"/>`;
  const txtLabel = aircraftBody ? `airframe · drag ${setup.drag.toFixed(2)}× · lift ${setup.downforce.toFixed(2)}×` : `${setup.drive.label} · ${setup.tire.label} · ${setup.rim.label}`;
  const txt = `<text x="20" y="97" fill="#f8ecd0" font-size="9" font-weight="800">${txtLabel}</text>`;
  const defs = `<defs><linearGradient id="bodyGrad" x1="0" x2="1"><stop offset="0" stop-color="${c}"/><stop offset="1" stop-color="#ffffff" stop-opacity=".35"/></linearGradient><filter id="glow"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>`;
  const bodyFill = 'fill="url(#bodyGrad)" stroke="#d8bf7a" stroke-width="2" filter="url(#glow)"';
  const spoilerPart = spoilerSvg(spoiler);
  const bodies = {
    coupe: `<path d="M24 73 L44 72 C66 48,90 38,126 39 C155 39,188 46,214 54 L264 59 C282 62,292 67,298 73 L24 73 Z" ${bodyFill}/><path d="M84 47 C105 41,134 40,158 42 C180 44,198 50,212 55" stroke="#eaf6ff" stroke-width="3" fill="none"/>`,
    supercar: `<path d="M20 74 L48 72 C74 60,102 42,144 38 C190 35,224 42,260 54 L294 65 L298 74 L20 74 Z" ${bodyFill}/><path d="M104 45 C134 40,164 39,196 44 C214 47,230 52,244 57" stroke="#ecf8ff" stroke-width="3" fill="none"/>`,
    hypercar: `<path d="M18 74 L54 72 C86 50,116 36,154 34 C200 32,232 42,258 50 C274 54,286 60,300 74 L18 74 Z" ${bodyFill}/><path d="M92 43 C114 36,142 34,170 36 C198 38,216 44,234 52 C242 46,252 42,266 42" stroke="#eef7ff" stroke-width="3" fill="none"/>`,
    sedan: `<path d="M18 74 L36 73 C56 56,76 44,108 44 L144 44 C176 44,200 50,220 58 L274 60 C288 62,298 67,302 74 L18 74 Z" ${bodyFill}/><path d="M78 48 L110 48 L132 46 L158 46 L180 49 L206 56" stroke="#edf7ff" stroke-width="3" fill="none"/>`,
    wagon: `<path d="M18 74 L34 73 C52 52,72 42,100 42 L176 42 C198 42,218 48,236 56 L286 60 C298 63,306 68,308 74 L18 74 Z" ${bodyFill}/><path d="M70 47 L104 46 L146 46 L182 46 L210 50 L232 56" stroke="#edf7ff" stroke-width="3" fill="none"/>`,
    hatch: `<path d="M20 74 L42 73 C66 54,84 42,116 41 C148 40,174 46,200 56 L252 60 C268 62,280 66,290 74 L20 74 Z" ${bodyFill}/><path d="M78 47 C102 42,132 41,160 44 C178 46,194 50,212 56" stroke="#eef8ff" stroke-width="3" fill="none"/>`,
    suv: `<path d="M18 76 L32 76 L40 52 C56 39,84 30,126 30 L184 30 C212 30,236 38,254 50 L294 58 C302 60,308 66,310 76 L18 76 Z" ${bodyFill}/><path d="M72 36 L118 36 L156 36 L188 36 L214 42 L238 50" stroke="#eef8ff" stroke-width="3" fill="none"/>`,
    truck: `<path d="M18 76 L36 76 L46 56 C60 42,86 36,114 36 L152 36 C170 36,186 44,196 56 L234 56 L258 44 L286 44 L300 56 L310 76 L18 76 Z" ${bodyFill}/><path d="M72 42 L112 42 L140 42 L164 52" stroke="#eef8ff" stroke-width="3" fill="none"/>`,
    offroad: `<path d="M16 78 L30 78 L36 46 C52 36,78 28,120 28 L188 28 C214 28,236 34,252 46 L286 52 C300 54,310 64,312 78 L16 78 Z" ${bodyFill}/><path d="M70 34 L112 34 L152 34 L190 34 L220 40 L244 48" stroke="#eef8ff" stroke-width="3" fill="none"/>`,
    formula: `<path d="M18 76 L58 72 L96 62 L118 54 L178 54 L212 60 L258 62 L296 56 L308 76 L18 76 Z" ${bodyFill}/><rect x="32" y="52" width="42" height="8" rx="3" fill="#d8bf7a"/><path d="M106 50 C134 44,162 44,186 48" stroke="#eef8ff" stroke-width="3" fill="none"/><rect x="252" y="34" width="44" height="8" rx="3" fill="#d8bf7a"/>`,
    light_aircraft: `<path d="M32 60 L146 48 L248 58 L292 72 L146 70 Z" ${bodyFill}/><path d="M128 48 L100 28 L158 42 L222 26 L188 54" fill="#d8bf7a" opacity=".82"/><path d="M62 68 L24 86 L98 75 M246 68 L302 84 L220 75" stroke="#eaf6ff" stroke-width="4" fill="none"/><circle cx="78" cy="74" r="5" fill="#0b0f14"/><circle cx="194" cy="74" r="5" fill="#0b0f14"/>`,
    turboprop_plane: `<path d="M26 61 C82 44,174 44,266 62 L302 74 L266 80 C174 88,82 82,26 67 Z" ${bodyFill}/><path d="M134 54 L76 24 L170 48 L248 22 L198 61" fill="#d8bf7a" opacity=".80"/><path d="M30 64 L8 46 M30 64 L8 82 M30 64 L6 64" stroke="#eef8ff" stroke-width="3"/><circle cx="34" cy="64" r="8" fill="#111827" stroke="#e5eef8" stroke-width="2"/>`,
    business_jet: `<path d="M26 64 C88 48,176 48,272 60 C292 63,304 69,310 76 C218 82,112 82,26 72 Z" ${bodyFill}/><path d="M136 56 L82 30 L178 50 L254 32 L206 62" fill="#d8bf7a" opacity=".82"/><path d="M256 61 L286 36 L280 66" fill="#d8bf7a" opacity=".9"/><path d="M76 60 L214 62" stroke="#eef8ff" stroke-width="3"/>`,
    airliner: `<path d="M20 62 C86 42,202 44,294 62 C308 65,314 72,306 78 C208 84,84 82,20 72 Z" ${bodyFill}/><path d="M126 56 L60 30 L168 50 L272 28 L202 63" fill="#d8bf7a" opacity=".82"/><path d="M258 61 L296 34 L288 67" fill="#d8bf7a" opacity=".9"/><circle cx="114" cy="70" r="5" fill="#111827"/><circle cx="226" cy="70" r="5" fill="#111827"/><path d="M70 61 L238 62" stroke="#eef8ff" stroke-width="3"/>`,
    fighter_jet: `<path d="M16 69 L122 50 L196 52 L306 66 L198 80 L124 78 Z" ${bodyFill}/><path d="M128 54 L68 24 L164 50 L248 22 L206 62" fill="#d8bf7a" opacity=".85"/><path d="M224 61 L270 34 L258 66" fill="#d8bf7a"/><path d="M74 68 L20 54 M74 70 L20 86" stroke="#eef8ff" stroke-width="3"/><path d="M128 57 C152 50,174 50,198 56" stroke="#eef8ff" stroke-width="3" fill="none"/>`,
    helicopter: `<path d="M70 64 C96 44,158 40,218 54 C246 60,260 72,248 82 C190 88,108 84,70 74 Z" ${bodyFill}/><path d="M196 60 L302 48 L312 54 L222 70" fill="#d8bf7a" opacity=".82"/><path d="M48 68 L18 52 M48 68 L16 82" stroke="#eef8ff" stroke-width="3"/><path d="M128 35 L182 35 M155 8 L155 62" stroke="#d8bf7a" stroke-width="5" stroke-linecap="round"/><path d="M110 86 L226 86" stroke="#eaf6ff" stroke-width="4"/>`,
    uav: `<path d="M46 66 L130 48 L190 48 L274 66 L188 78 L132 78 Z" ${bodyFill}/><path d="M84 58 L36 34 L126 52 M236 58 L284 34 L194 52" stroke="#d8bf7a" stroke-width="8" stroke-linecap="round"/><circle cx="58" cy="34" r="10" fill="#111827" stroke="#eef8ff" stroke-width="3"/><circle cx="262" cy="34" r="10" fill="#111827" stroke="#eef8ff" stroke-width="3"/><path d="M132 55 C150 50,170 50,188 55" stroke="#eef8ff" stroke-width="3" fill="none"/>`,
    rocket_plane: `<path d="M18 69 L120 50 L202 52 L310 64 L202 80 L120 78 Z" ${bodyFill}/><path d="M126 54 L58 22 L166 50 L264 20 L208 62" fill="#d8bf7a" opacity=".86"/><path d="M52 68 L18 50 M52 70 L18 88" stroke="#ffedd5" stroke-width="4"/><path d="M78 66 C56 58,38 58,18 66 C40 76,58 76,78 70" fill="#fb923c" opacity=".85"/>`
  };
  return `<svg viewBox="0 0 320 104" aria-label="vehicle body preview">${defs}${bodies[bodyType] || bodies.coupe}${spoilerPart}${wheelSvg}${txt}</svg>`;
}

function updateVehiclePreview(){
  refreshBodyTypeOptions();
  const setup = getVehicleSetup();
  const box = $("bodyPreview");
  if(!box) return;
  const c = setup.body.color;
  const svg = getVehiclePreviewSvg(state.bodyType, state.spoilerPackage, c, setup);
  box.innerHTML = `<span class="bodyPreviewLabel">Body preview</span>${svg}<span class="bodyPreviewHint" id="vehicleSummary">${setup.drive.label} · ${setup.body.label} · ${setup.tire.label} · ${setup.rim.label}</span>`;
  const setText = (id, txt) => { const el = $(id); if(el) el.textContent = txt; };
  setText("vehicleGripOut", `${setup.launchGrip.toFixed(2)}×`);
  setText("vehicleMassOut", `${Math.round(setup.mass)} kg`);
  setText("vehicleDragOut", `${setup.drag.toFixed(2)}×`);
  setText("vehicleDownforceOut", `${setup.downforce.toFixed(2)}×`);
}
function drawVehicleBody(cx, cy, scale){
  // removed from scene by user request; body image remains only in the vehicle menu preview
}

function estimateGearSpeedKmh(gear, rpm=state.revLimit){
  const setup = getGearSetup();
  const ratio = (setup.ratios[gear] || 0) * state.finalDrive;
  if(!ratio) return 0;
  const wheelRadius = getConfig().family === "electric" ? .34 : .335;
  const circumference = 2 * Math.PI * wheelRadius;
  const wheelRpm = rpm / ratio;
  return wheelRpm * circumference * 60 / 1000;
}

function automaticShift(idle){
  if(state.transmissionMode !== "auto" || state.shiftTimer > 0.04 || state.transmissionType === "cvt") return;
  if(normalizeGearSelector() !== "D") return;
  const cfg = getConfig();
  const setup = getGearSetup();
  const maxGear = getMaxDrivenGear();

  if(state.gear <= 0){ shiftTo(getSafeGearForSpeed()); return; }

  // If speed has already outrun the current gear, jump to the first safe gear instead
  // of waiting one gear at a time on the limiter.
  const currentProjectedRpm = projectedRpmForGear(state.gear);
  if(currentProjectedRpm > state.revLimit * .985 && state.gear < maxGear){
    shiftTo(Math.max(state.gear + 1, getSafeGearForSpeed()));
    return;
  }

  const th = getThrottle();
  const sport = th > .72 || state.launchControl;
  const cruise = th < .28 && !state.brake;
  const upFrac = sport ? .88 : cruise ? .52 : .70;
  const downFrac = sport ? .42 : cruise ? .22 : .30;
  const currentRatio = setup.ratios[state.gear] || 1;
  const nextRatio = setup.ratios[state.gear + 1] || 0;
  const prevRatio = setup.ratios[state.gear - 1] || 0;
  const projectedNextRpm = nextRatio ? Math.max(projectedRpmForGear(state.gear + 1), state.rpm * (nextRatio / currentRatio)) : 0;
  const projectedPrevRpm = prevRatio ? Math.max(projectedRpmForGear(state.gear - 1), state.rpm * (prevRatio / currentRatio)) : 0;
  const minPostShift = cfg.family === "electric" ? 0 : Math.max(idle + 300, state.revLimit * (sport ? .36 : .24));
  const speedNearGearLimit = state.speed > estimateGearSpeedKmh(state.gear, state.revLimit) * .90;
  const rpmNearLimit = state.rpm > state.revLimit * upFrac;
  const usefulNext = nextRatio && projectedNextRpm > minPostShift;

  if(state.gear < maxGear && usefulNext && (speedNearGearLimit || rpmNearLimit || (cruise && state.rpm > state.revLimit * .45))){
    shiftTo(state.gear + 1);
    return;
  }

  const kickdown = th > .82 && state.rpm < state.revLimit * .58;
  const brakingDownshift = state.brake && state.speed < Math.max(16, estimateGearSpeedKmh(state.gear - 1, state.revLimit * .38));
  const lowRpmDownshift = state.rpm < Math.max(idle + 160, state.revLimit * downFrac);
  const prevSafe = prevRatio && projectedPrevRpm < state.revLimit * .90;

  if(state.gear > 1 && prevSafe && (kickdown || brakingDownshift || lowRpmDownshift)){
    shiftTo(state.gear - 1);
  }
}

function updateCVTRatio(idle, freeTargetRpm, wheelRpm){
  const setup = getGearSetup();
  const high = setup.ratios[1] || 6.5;
  const low = setup.ratios[setup.ratios.length - 1] || 0.7;
  const desiredRpm = state.launchControl && state.speed < 20
    ? state.revLimit * .72
    : idle + getThrottle() * (state.revLimit * .78 - idle);
  const desiredRatio = wheelRpm > 1 ? desiredRpm / wheelRpm / state.finalDrive : high;
  const clamped = Math.max(low, Math.min(high, desiredRatio));
  state.virtualRatio += (clamped - state.virtualRatio) * .08;
}

function applyDrivetrain(engineTorque, idle, freeTargetRpm, dt){
  const cfg = getConfig();
  if(!transmissionApplies(cfg)){
    state.speed += (0 - state.speed) * dt * 2;
    return;
  }

  const selector = normalizeGearSelector();
  if(selector === "P"){
    state.speed += (0 - state.speed) * Math.min(1, dt * 10);
    if(Math.abs(state.speed) < .25) state.speed = 0;
  }
  const wheelRadius = cfg.family === "electric" ? .34 : .335;
  const circumference = 2 * Math.PI * wheelRadius;
  const speedAbs = Math.abs(state.speed || 0);
  const wheelRpm = speedAbs <= 0 ? 0 : ((speedAbs * 1000 / 3600) / circumference) * 60;

  if(state.transmissionType === "cvt"){
    updateCVTRatio(idle, freeTargetRpm, wheelRpm);
  } else if(state.transmissionMode === "auto" && selector === "D") {
    automaticShift(idle);
  }

  if(state.shiftTimer > 0) state.shiftTimer = Math.max(0, state.shiftTimer - dt);

  const ratio = currentGearRatio();
  const coupledRpm = ratio !== 0 ? Math.max(idle, wheelRpm * Math.abs(ratio)) : idle;
  const throttleNow = getThrottle();
  const launchHold = selector === "D" && state.launchControl && throttleNow > .85 && state.brake && speedAbs < 3;
  const disconnected = state.clutch || selector === "P" || selector === "N" || state.shiftTimer > 0.02 || launchHold;
  const lowSpeedSlip = !disconnected && selector === "D" && speedAbs < 12 && throttleNow > .04
    ? Math.min(.46, throttleNow * .58 + Math.max(0, 12 - speedAbs) / 12 * .18)
    : 0;
  const baseBlend = state.transmissionType === "cvt" ? .78 : .90;
  const blend = disconnected ? 0 : Math.max(.34, baseBlend - lowSpeedSlip);
  const targetRpm = launchHold ? state.revLimit * .58 : disconnected ? freeTargetRpm : freeTargetRpm * (1 - blend) + coupledRpm * blend;
  const idleTipIn = throttleNow > .04 && state.rpm < idle + 260 && targetRpm > state.rpm ? .065 : 0;
  const rpmResponse = cfg.family === "electric" ? .14 : .105 + idleTipIn;
  state.rpm += (targetRpm - state.rpm) * rpmResponse;

  // Realistic gearing: once a fixed gear reaches the rev limiter, acceleration is cut and speed is clamped.
  let limiterCut = 1;
  let maxSpeedForGear = Infinity;
  if(!disconnected && ratio !== 0 && state.transmissionType !== "cvt"){
    maxSpeedForGear = (state.revLimit / Math.abs(ratio)) * circumference * 60 / 1000;
    if(selector === "R") maxSpeedForGear = Math.min(maxSpeedForGear, 38);
    const limiterStart = maxSpeedForGear * .965;
    if(speedAbs > limiterStart){
      const over = Math.min(1, (speedAbs - limiterStart) / Math.max(1, maxSpeedForGear - limiterStart));
      limiterCut = Math.max(0, 1 - over * 1.15);
      state.rpm = Math.min(state.revLimit * 1.015, Math.max(state.rpm, coupledRpm));
    }
  }

  const shiftCut = state.shiftTimer > 0.02 ? (state.transmissionType === "dct" ? .72 : .25) : 1;
  const launchBoost = state.launchControl && !state.brake && state.speed < 45 && getThrottle() > .75 ? 1.22 : 1;
  const vset = getVehicleSetup();
  const drivelineEff = disconnected && !launchHold ? 0 : vset.drivelineEff;
  const tractionLimit = (5.4 + Math.min(3.6, state.speed / 90) * (vset.downforce - 1)) * vset.launchGrip;
  const electronicCut = speedLimiterTorqueCut(speedAbs);
  const rawWheelTorque = engineTorque * ratio * drivelineEff * shiftCut * launchBoost * limiterCut * electronicCut;
  const wheelTorque = Math.sign(rawWheelTorque || 1) * Math.min(Math.abs(rawWheelTorque), vset.mass * tractionLimit);

  const vehicleMass = vset.mass;
  const topEndAssist = 1 + Math.min(ROAD_PHYSICS.topEndAssistMax - 1, Math.max(0, speedAbs - ROAD_PHYSICS.topEndAssistStart) / 170 * (ROAD_PHYSICS.topEndAssistMax - 1));
  const tractive = wheelTorque / vehicleMass * ROAD_PHYSICS.driveForceScale * vset.accelFactor * topEndAssist;
  const rolling = (.014 + state.load / 2600) * (state.vehicleDrive === "4x4" ? 1.12 : 1) * (vset.rollingFactor || 1);
  const dragDirection = Math.sign(state.speed || tractive || 1);
  const aero = ROAD_PHYSICS.aeroDragKmh2 * vset.drag * speedAbs * speedAbs * dragDirection;
  const rollingDrag = rolling * dragDirection;
  const braking = state.brake && !launchHold ? 9.5 * (1 + Math.min(.35, (vset.downforce - 1) * .20)) : 0;
  const brakingDrag = braking * dragDirection;

  let accel = tractive - rollingDrag - aero - brakingDrag;
  if(getThrottle() < .02) accel -= .16 * dragDirection;
  if(limiterCut < .15) accel = selector === "R" ? Math.max(accel, .25) : Math.min(accel, -.25);
  state.speed = state.speed + accel * dt * 12;
  if(Number.isFinite(maxSpeedForGear) && Math.abs(state.speed) > maxSpeedForGear * 1.012){
    state.speed = Math.sign(state.speed) * maxSpeedForGear * 1.012;
  }
  const topSpeed = getTheoreticalTopSpeedKmh();
  if(Math.abs(state.speed) > topSpeed) state.speed = Math.sign(state.speed) * topSpeed;
  if(Math.abs(state.speed) < .2 && getThrottle() < .02) state.speed = 0;
}

function refreshTransmissionControls(){
  const cfg = getConfig();
  const enabled = transmissionApplies(cfg);
  const visualEnabled = gearboxVisualApplies(cfg);
  const selector = enabled ? normalizeGearSelector() : "N";
  const gearLabel = enabled ? gearDisplayLabel() : "—";
  $("transmissionSection").classList.toggle("hide", !enabled);
  $("transmissionLabel").textContent = enabled ? `${state.transmissionMode === "auto" ? "A" : "M"}${gearLabel} · ${speedDisplayText()}` : "Direct drive";
  $("gearOut").textContent = gearLabel;
  $("speedOut").textContent = speedDisplayText();
  $("autoModeBtn").classList.toggle("active", state.transmissionMode === "auto");
  $("manualModeBtn").classList.toggle("active", state.transmissionMode === "manual");
  if($("parkBtn")) $("parkBtn").classList.toggle("active", selector === "P");
  if($("neutralBtn")) $("neutralBtn").classList.toggle("active", selector === "N");
  if($("reverseBtn")) $("reverseBtn").classList.toggle("active", selector === "R");
  if($("driveBtn")) $("driveBtn").classList.toggle("active", selector === "D");
  if($("gearSelectorSelect") && $("gearSelectorSelect").value !== selector) $("gearSelectorSelect").value = selector;
  if($("shiftStatus")){
    const manualHint = state.transmissionMode === "manual" ? "Manual: lift throttle + hold C clutch to shift." : "Automatic: use P/N/R or drive with forward gears.";
    $("shiftStatus").textContent = state.shiftBlockedReason || manualHint;
  }
  $("launchBtn").classList.toggle("active", state.launchControl);
  $("launchBtn").textContent = state.launchControl ? "Launch control on" : "Launch control off";
  $("gearUpBtn").disabled = !enabled;
  $("gearDownBtn").disabled = !enabled;
  if($("sceneShiftUpBtn")) $("sceneShiftUpBtn").disabled = !enabled;
  if($("sceneShiftDownBtn")) $("sceneShiftDownBtn").disabled = !enabled;
  if($("sceneAutoManualBtn")){ $("sceneAutoManualBtn").textContent = `Mode: ${state.transmissionMode === "auto" ? "Auto" : "Manual"}`; $("sceneAutoManualBtn").classList.toggle("active", state.transmissionMode === "manual"); }
  $("finalDrive").disabled = !enabled;
  if($("gearCount")){
    const maxGear = getMaxDrivenGear();
    if(state.gear > maxGear) state.gear = maxGear;
    $("gearCount").disabled = !enabled;
    $("gearCount").value = Math.max(1, Math.min(10, Math.round(state.gearCount || maxGear)));
    $("gearCountOut").textContent = $("gearCount").value;
  }
  if($("gearboxAnimationBtn")){
    $("gearboxAnimationBtn").classList.toggle("active", state.gearboxAnimation !== false);
    $("gearboxAnimationBtn").textContent = state.gearboxAnimation === false ? "Gearbox animation off" : "Gearbox animation on";
    $("gearboxAnimationBtn").disabled = !visualEnabled;
  }
  if($("gearboxAnimationOut")){
    const pairCount = Math.max(1, Math.min(10, Math.round(state.gearCount || 7)));
    const activeGear = selector === "D" ? `gear ${Math.max(1, Math.min(pairCount, state.gear || 1))}` : selector;
    $("gearboxAnimationOut").textContent = visualEnabled
      ? `Flywheel, starter, shafts, and ${pairCount} gear pair${pairCount === 1 ? "" : "s"} visible. Active: ${activeGear}.`
      : "Electric and direct-drive engines hide the road gearbox animation.";
  }
  $("finalDriveOut").textContent = `${state.finalDrive.toFixed(2)}:1`;
  $("transmissionNoteToggle").classList.toggle("active", state.noteOpen);
  $("transmissionNote").classList.toggle("open", state.noteOpen);
  $("transmissionNoteArrow").textContent = state.noteOpen ? "⌃" : "⌄";
  $("transmissionNoteToggle").querySelector("span").textContent = enabled
    ? `${state.transmissionType.toUpperCase()} ${getGearSetup(cfg).label} note`
    : "Direct-drive note";
}
function getThrottle(){
  return Math.max(state.throttle, state.gas ? 100 : 0) / 100;
}

function pistonTorqueCurve(rpm){
  const disp = state.displacement / 4;
  const cyl = Math.sqrt(state.units / 8);
  const comp = 1 + (state.compression - 10) * .035;
  const fuel = 1 - Math.min(.28, Math.abs(state.fuel - 1) * 1.1);
  const tim = 1 + state.timing * .012 - Math.max(0, state.timing - 5) * .035;
  const layout = getConfig().layout || state.type;
  const peaks = {inline:4300, v:3800, w:3600, flat:4500, vr:4100, radial:3000, h:3600, u:3500, x:3200, opposed:2800};
  const spreads = {inline:2800, v:2800, w:3300, flat:2600, vr:2900, radial:2200, h:2400, u:2300, x:2300, opposed:2100};
  const peak = peaks[layout] || peaks[state.type] || 3800;
  const spread = spreads[layout] || spreads[state.type] || 2800;
  const curve = Math.exp(-Math.pow((rpm - peak)/spread, 2));
  let extraFactor = state.type === "radial" ? 1.18 : state.type === "vr" ? .96 : 1;
  // New turbo + hybrid behavior: turbo engines actually make more torque as boost rises,
  // and hybrids add instant electric assist based on battery charge.
  if(state.type === "turbo_i4" || state.type === "turbo_v6" || state.type === "twin_turbo_v8"){
    const boost = Math.max(0, state.extra1 || 0);
    const turboSize = Math.max(40, state.extra2 || 60);
    const spool = Math.max(.25, Math.min(1.25, (rpm - 1300) / (turboSize * 70)));
    extraFactor *= 1 + boost * .42 * spool;
  }
  let baseTorque = Math.max(0, 520 * disp * cyl * comp * (.48 + .52 * curve) * fuel * tim * extraFactor * fuelSystemOutputMultiplier(getConfig()));
  if(state.type === "mild_hybrid" || state.type === "full_hybrid" || state.type === "plug_in_hybrid"){
    const assistHp = state.extra1 || 0;
    const charge = Math.max(0, Math.min(1, (state.extra2 || 0) / 100));
    const lowRpmAssist = Math.max(.15, 1 - rpm / Math.max(2500, state.revLimit * .55));
    baseTorque += assistHp * 6.8 * charge * lowRpmAssist;
  }
  return baseTorque;
}

function rotaryTorqueCurve(rpm){
  const disp = state.displacement / 3;
  const rotors = state.units;
  const port = 1 + (state.extra1 - 5) * .06;
  const fuel = 1 - Math.min(.28, Math.abs(state.fuel - 1) * 1.0);
  const tim = 1 + state.timing * .010;
  const curve = Math.exp(-Math.pow((rpm - 6200)/3400, 2));
  return Math.max(0, 310 * rotors * disp * (.3 + .9 * curve) * port * fuel * tim * fuelSystemOutputMultiplier(getConfig()));
}

function electricTorqueCurve(rpm){
  const motors = state.units;
  const voltage = state.extra1 || 800;
  const poles = state.extra2 || 6;
  const stackBonus = state.type === "fuel_cell" ? Math.max(.8, (state.extra1 || 220) / 180) : 1;
  const base = 240 * motors * (voltage / 400) * (1 + poles * .03) * stackBonus;
  const fade = Math.max(.18, 1 - Math.max(0, rpm - (state.revLimit * .35)) / (state.revLimit * .95));
  return base * fade;
}

function jetThrust(type, spoolNorm){
  if(type === "rocket"){
    const chambers = state.units, chamber = state.extra1 || 120, mix = state.extra2 || 2.6;
    return chambers * chamber * 1.8 * Math.pow(spoolNorm+.2, .75) * (1 + (mix-2.6)*.04);
  }
  if(type === "ramjet" || type === "scramjet"){
    const mach = state.extra1 || (type==="scramjet" ? 6 : 2);
    const area = state.extra2 || 80;
    return (mach * mach * (area/80) * state.units * (type==="scramjet" ? 18 : 10)) * Math.pow(spoolNorm, .7);
  }
  if(type === "pulsejet"){
    const freq = state.extra1 || 90, len = state.extra2 || 1.8;
    return (freq*.28 + len*10 + state.units*.8) * Math.pow(spoolNorm, .8);
  }
  if(type === "turboshaft"){
    const load = state.extra1 || 60, pr = state.extra2 || 18;
    return (load*.8 + pr*2.1 + state.units*8) * Math.pow(spoolNorm, 1.05);
  }
  if(type === "turbojet"){
    const stages = state.units;
    const pr = state.extra1 || 18;
    const nozzle = (state.extra2 || 75) / 100;
    const ab = state.afterburner ? 1.45 : 1;
    return (stages * 2.0 + pr * 1.55) * Math.pow(spoolNorm, 1.12) * nozzle * ab;
  }
  if(type === "turbofan" || type === "geared_turbofan"){
    const fanStages = state.units;
    const bypass = state.extra1 || 6;
    const prOrGear = state.extra2 || 32;
    const gearBonus = type==="geared_turbofan" ? 1.12 : 1;
    return (35 + fanStages * 9 + bypass * 4.2 + prOrGear * (type==="geared_turbofan" ? 4.0 : .7)) * Math.pow(spoolNorm, 1.04) * gearBonus * fuelSystemOutputMultiplier(getConfig());
  }
  const blades = state.units;
  const diameter = state.extra1 || 3.6;
  const gear = state.extra2 || 12;
  return (22 + blades * 4.5 + diameter * 18 + gear * 1.4) * Math.pow(spoolNorm, .96) * fuelSystemOutputMultiplier(getConfig());
}

function updateStarterMotor(dt, cfg, idleRpm){
  if(typeof state.starterMotorRpm !== "number") state.starterMotorRpm = 0;
  if(typeof state.starterMotorAngle !== "number") state.starterMotorAngle = 0;
  const canCrank = idleRpm > 0 && gearboxVisualApplies(cfg);
  const manualActive = !!state.starterEngaged && canCrank;
  const autoActive = (state.starterTimer || 0) > 0 && canCrank;
  const active = manualActive || autoActive;
  const flywheelRpm = Math.max(0, state.rpm || 0);

  state.starterGrinding = manualActive && flywheelRpm > STARTER_DRIVE_RPM + 20;
  const targetRpm = active ? STARTER_DRIVE_RPM : 0;
  const response = active ? .22 : .14;
  state.starterMotorRpm += (targetRpm - state.starterMotorRpm) * response;
  if(Math.abs(state.starterMotorRpm) < .2 && !active) state.starterMotorRpm = 0;

  const slipPulse = state.starterGrinding ? 1 + Math.sin(Date.now() * .05) * .18 : 1;
  state.starterMotorAngle -= Math.max(0, state.starterMotorRpm) / 60 * Math.PI * 2 * dt * slipPulse;
  return {active, manualActive, autoActive};
}

function startEngine(){
  if(state.on) return;
  const cfg = getConfig();
  state.on = true;
  state.starterTimer = engineIdleRpm(cfg) > 0 ? 1.25 : 0;
  state.starterHoldTime = 0;
  beep(160, .12, "sawtooth", .08);
  startAudio();
  state.rpm = Math.max(state.rpm, cfg.family === "jet" ? 180 : cfg.family === "electric" ? 0 : 90);
}

function stopEngine(){
  if(!state.on) return;
  state.on = false;
  state.starterTimer = 0;
  state.starterHoldTime = 0;
  beep(120, .12, "sine", .04);
  stopAudio();
}


function physics(dt){
  const cfg = getConfig();
  const th = getThrottle();
  const idleRpm = engineIdleRpm(cfg);
  const starter = updateStarterMotor(dt, cfg, idleRpm);
  if(state.on && state.starterTimer > 0 && idleRpm > 0){
    state.rpm += (idleRpm * .82 - state.rpm) * .045;
    if(state.rpm >= idleRpm * .94) state.starterTimer = 0;
    else state.starterTimer = Math.max(0, state.starterTimer - dt);
  }else if(state.starterTimer > 0){
    state.starterTimer = Math.max(0, state.starterTimer - dt);
  }
  if(starter.manualActive && !state.starterGrinding && state.rpm < STARTER_DRIVE_RPM){
    state.rpm += (STARTER_DRIVE_RPM - state.rpm) * .08;
  }

  if(!state.on){
    const starterCranking = starter.manualActive && !state.starterGrinding;
    state.starterHoldTime = starterCranking ? Math.min(2, (state.starterHoldTime || 0) + dt) : 0;
    const rpmTarget = starterCranking ? Math.min(STARTER_DRIVE_RPM, idleRpm * .96) : 0;
    state.rpm += (rpmTarget - state.rpm) * (starterCranking ? .12 : .10);
    state.aux += (0 - state.aux) * .08;
    state.temp += (20 - state.temp) * .02;
    state.output = 0;
    state.power = 0;
    state.speed = Math.max(0, state.speed - dt * 4);
    applyElectronicSpeedLimiter(dt);
    state.crank += Math.max(0, state.rpm) / 60 * Math.PI * 2 * dt;
    if(starterCranking && state.starterHoldTime >= 2){
      startEngine();
    }
    return;
  }

  if(cfg.family === "piston"){
    const idle = state.type === "radial" ? 700 : 820;
    const brakeLoad = state.brake ? .45 : 0;
    const freeTarget = idle + th * (state.revLimit - idle) * (1 - state.load / 100 * .18 - brakeLoad * .08);
    const boost = turboBoostLevel();
    const boostSpool = boost > 0 ? Math.min(1, Math.max(0, (state.rpm - idle) / Math.max(900, state.revLimit*.38))) : 0;
    const turboMult = 1 + boost * boostSpool * (.24 + state.systemPower/360);
    const hybridTorque = hybridAssistHp() * 7127 / Math.max(state.rpm, 1600);
    const nuclearAssist = state.nuclearFission === "micro" ? 140 : state.nuclearFission === "rtg" ? 28 : 0;
    const comboAssist = state.secondaryEngine === "electric" ? 110 : state.secondaryEngine === "rotary" ? 65 : state.secondaryEngine === "rocket" ? 260 : state.secondaryEngine === "turbojet" ? 155 : state.secondaryEngine === "turbofan" ? 130 : 0;
    const engineTorque = (pistonTorqueCurve(Math.max(state.rpm, idle)) * turboMult + hybridTorque + nuclearAssist + comboAssist) * th * (state.shiftTimer > 0 ? .84 : 1);
    applyDrivetrain(engineTorque, idle, freeTarget, dt);
    if(th < .03 && ["P","N"].includes(normalizeGearSelector()) && !state.clutch) state.rpm += (idle - state.rpm) * .06;
    state.output = engineTorque;
    state.power = state.output * state.rpm / 7127;
    state.aux = Math.max(0, (state.displacement / 4) * th * .8);
    state.temp += ((th * .9 + state.rpm / state.revLimit * .35 + state.load / 100 * .25) - .2) * dt * 18;

  } else if(cfg.family === "rotary"){
    const idle = 1100;
    const brakeLoad = state.brake ? .45 : 0;
    const freeTarget = idle + th * (state.revLimit - idle) * (1 - state.load / 100 * .16 - brakeLoad * .08);
    const engineTorque = rotaryTorqueCurve(Math.max(state.rpm, idle)) * th * (state.shiftTimer > 0 ? .82 : 1);
    applyDrivetrain(engineTorque, idle, freeTarget, dt);
    state.output = engineTorque;
    state.power = state.output * state.rpm / 7127;
    state.aux = Math.max(0, (state.extra1 / 10) * 1.2 * th);
    state.temp += ((th * 1.05 + state.rpm / state.revLimit * .5) - .18) * dt * 18;

  } else if(cfg.family === "electric"){
    const freeTarget = th * state.revLimit * (1 - state.load * .002 - (state.brake ? .10 : 0));
    const fuelCellBoost = isFuelCellActive() ? (state.systemPower * 5.0 + 280) : 0;
    const nuclearAssist = state.nuclearFission === "micro" ? 180 : state.nuclearFission === "rtg" ? 45 : 0;
    const comboAssist = state.secondaryEngine === "electric" ? 120 : state.secondaryEngine === "rotary" ? 70 : state.secondaryEngine === "rocket" ? 300 : state.secondaryEngine === "turbojet" ? 160 : state.secondaryEngine === "turbofan" ? 140 : 0;
    const engineTorque = (electricTorqueCurve(Math.max(state.rpm, 1)) + fuelCellBoost + nuclearAssist + comboAssist) * th * (state.shiftTimer > 0 ? .78 : 1);
    applyDrivetrain(engineTorque, 0, freeTarget, dt);
    state.output = engineTorque;
    state.power = state.output * Math.max(100, state.rpm) / 7127;
    state.aux = state.extra1 || 800;
    state.temp += ((th * .7 + state.load / 100 * .45) - .25) * dt * 12;

  } else if(cfg.family === "linear" || cfg.family === "external" || cfg.family === "hydraulic"){
    const idle = cfg.family === "external" ? 200 : 500;
    const freeTarget = idle + th * (state.revLimit - idle) * (1 - state.load / 100 * .2);
    const base = cfg.family === "hydraulic"
      ? (state.extra1 * state.extra2 / 60)
      : cfg.family === "external"
      ? (state.extra1 || 10) * state.units * 8
      : 320 * state.displacement * state.units / 4;
    const engineTorque = base * th * (state.shiftTimer > 0 ? .84 : 1);
    applyDrivetrain(engineTorque, idle, freeTarget, dt);
    state.output = engineTorque;
    state.power = state.output * Math.max(100, state.rpm) / 7127;
    state.aux = state.extra1 || 0;
    state.temp += ((th * .55) - .18) * dt * 12;

  } else {
    const idle = state.type === "rocket" ? 0 : 2200;
    const target = idle + th * (state.revLimit - idle);
    state.rpm += (target - state.rpm) * .025;
    const spoolNorm = Math.max(0, Math.min(1.2, state.rpm / state.revLimit));
    state.output = jetThrust(state.type, spoolNorm);
    if(state.type === "turboprop"){
      state.power = state.output * 65;
      state.aux = state.extra1 || 3.6;
    } else if(state.type === "turbofan" || state.type === "geared_turbofan"){
      state.power = state.output * 22;
      state.aux = state.extra1 || 6;
    } else {
      state.power = state.output * 18;
      state.aux = state.afterburner ? 1 : 0;
    }
    applyAircraftPhysics(state.output, dt);
    state.temp += ((th * 1.05 + (state.afterburner ? .5 : 0)) - .14) * dt * 18;
  }

  state.temp = Math.max(20, state.temp);
  applyElectronicSpeedLimiter(dt);
  state.crank += Math.max(0, state.rpm) / 60 * Math.PI * 2 * dt;
}



function makeEmptyBuildStats(){
  return {peakPower:0, peakOutput:0, maxSpeed:0, redlineHits:0, overheated:false, tractionLimited:false, samples:0};
}

function resetBuildStats(){
  state.buildStats = makeEmptyBuildStats();
  updateBuildSummary();
}

function updateBuildStats(cfg=getConfig()){
  if(!state.buildStats) state.buildStats = makeEmptyBuildStats();
  const s = state.buildStats;
  const activeSample = state.on || state.dyno || state.speed > 1 || state.power > 1 || state.output > 1;
  if(!activeSample) return;
  s.samples++;
  s.peakPower = Math.max(s.peakPower || 0, Number.isFinite(state.power) ? Math.max(0, state.power) : 0);
  s.peakOutput = Math.max(s.peakOutput || 0, Number.isFinite(state.output) ? Math.abs(state.output) : 0);
  s.maxSpeed = Math.max(s.maxSpeed || 0, Number.isFinite(state.speed) ? Math.max(0, state.speed) : 0);
  const hotLimit = cfg.family === "jet" ? 640 : cfg.family === "electric" ? 130 : 112;
  if(state.temp >= hotLimit) s.overheated = true;
  if(state.rpm > state.revLimit * .965) s.redlineHits++;
  if(cfg.family !== "jet"){
    const setup = getVehicleSetup();
    if(getThrottle() > .75 && state.speed < 55 && state.power > 350 && setup.launchGrip < 1.10) s.tractionLimited = true;
  }
}

function estimateZeroToHundred(cfg=getConfig()){
  if(cfg.family === "jet") return "Aircraft";
  normalizeSpeedLimiter();
  if(state.speedLimiterEnabled && state.speedLimitKmh < 100) return `Limited ${state.speedLimitKmh} km/h`;
  const stats = state.buildStats || makeEmptyBuildStats();
  const setup = getVehicleSetup();
  const hp = Math.max(stats.peakPower || 0, state.power || 0, 40);
  const mass = Math.max(650, setup.mass || 1850);
  const grip = Math.max(.65, Math.min(1.55, setup.launchGrip || 1));
  const sec = Math.max(1.8, Math.min(22, 3.4 / Math.pow(hp / mass, .34) / Math.pow(grip, .38)));
  return `${sec.toFixed(1)} s`;
}

function estimateTopSpeed(cfg=getConfig()){
  const stats = state.buildStats || makeEmptyBuildStats();
  normalizeSpeedLimiter();
  const applyLimit = estimate => state.speedLimiterEnabled ? Math.min(estimate, state.speedLimitKmh) : estimate;
  if(cfg.family === "jet"){
    const top = Math.max(stats.maxSpeed || 0, Math.min(aircraftMaxSpeedKmh ? aircraftMaxSpeedKmh() : 1000, aircraftMaxSpeedKmh ? aircraftMaxSpeedKmh() : 1000));
    return `${Math.round(applyLimit(top))} km/h`;
  }
  const setup = getVehicleSetup();
  const hp = Math.max(stats.peakPower || 0, state.power || 0, 40);
  const gearTop = getTheoreticalTopSpeedKmh ? getTheoreticalTopSpeedKmh() : ROAD_PHYSICS.maxDisplaySpeedKmh;
  const powerTop = 33 * Math.cbrt(hp / Math.max(.45, setup.drag || 1));
  const achieved = stats.maxSpeed || 0;
  const estimate = applyLimit(Math.max(achieved, Math.min(gearTop, powerTop, ROAD_PHYSICS.maxDisplaySpeedKmh)));
  return `${Math.round(estimate)} km/h`;
}

function classifyRisk(cfg=getConfig()){
  const s = state.buildStats || makeEmptyBuildStats();
  const risks = [];
  if(s.overheated || (cfg.family !== "jet" && state.temp > 108) || (cfg.family === "electric" && state.temp > 120)) risks.push("overheating");
  if(s.tractionLimited) risks.push("traction limited");
  if((s.redlineHits || 0) > 22) risks.push("redline abuse");
  if(cfg.family !== "jet" && getVehicleSetup().drag > 1.35 && (s.peakPower || 0) > 400) risks.push("aero drag limited");
  if(state.turboAddon !== "none" && state.temp > 100) risks.push("boost heat");
  if(!risks.length && (s.samples || 0) < 8) return "Run dyno or drive to collect data";
  return risks.length ? risks.join(" / ") : "stable";
}

function classifyBestUse(cfg=getConfig()){
  const s = state.buildStats || makeEmptyBuildStats();
  const hp = Math.max(s.peakPower || 0, state.power || 0);
  if(cfg.family === "jet") return "aircraft";
  if(state.secondaryEngine === "rocket" || state.nuclearFission !== "none" || state.vehicleDrive === "hover") return "experimental";
  if(state.hybridSystem === "fuel_cell" || cfg.family === "electric" || state.type.includes("hybrid")) return hp > 500 ? "track / eco" : "eco";
  if(state.tireType === "drag" || (hp > 900 && estimateZeroToHundred(cfg) !== "Aircraft" && parseFloat(estimateZeroToHundred(cfg)) < 3.6)) return "drag";
  if(["wing","active"].includes(state.spoilerPackage) || ["semi_slick","sport"].includes(state.tireType) || ["supercar","formula"].includes(state.bodyType)) return "track";
  if(hp < 220) return "eco";
  return "street / track";
}

function updateBuildSummary(){
  const cfg = getConfig();
  const s = state.buildStats || makeEmptyBuildStats();
  const powerUnit = cfg.family === "jet" ? "hp eq." : "hp";
  const torqueUnit = cfg.family === "jet" ? "kN thrust" : "Nm";
  if($("summaryPeakPower")) $("summaryPeakPower").textContent = `${Math.round(s.peakPower || 0).toLocaleString()} ${powerUnit}`;
  if($("summaryPeakTorque")) $("summaryPeakTorque").textContent = `${Math.round(s.peakOutput || 0).toLocaleString()} ${torqueUnit}`;
  if($("summaryZeroToHundred")) $("summaryZeroToHundred").textContent = estimateZeroToHundred(cfg);
  if($("summaryTopSpeed")) $("summaryTopSpeed").textContent = estimateTopSpeed(cfg);
  if($("summaryRisk")) $("summaryRisk").textContent = classifyRisk(cfg);
  if($("summaryBestUse")) $("summaryBestUse").textContent = classifyBestUse(cfg);
}

function dynoStep(){
  if(!state.dyno) return;
  state.on = true;
  state.throttle = 100;
  const cfg = getConfig();
  state.dynoRpm += cfg.family === "jet" ? 90 : 38;
  state.rpm += (state.dynoRpm - state.rpm) * .18;

  if(state.dynoRpm >= state.revLimit){
    state.dyno = false;
    state.throttle = 0;
    $("throttleSlider").value = 0;
    const best = state.dynoData.reduce((a,b)=> b.p > a.p ? b : a, {r:0,p:0,o:0});
    const unit = cfg.family === "jet" ? "hp eq." : "hp";
    if(!state.buildStats) state.buildStats = makeEmptyBuildStats();
    state.buildStats.peakPower = Math.max(state.buildStats.peakPower || 0, best.p || 0);
    state.buildStats.peakOutput = Math.max(state.buildStats.peakOutput || 0, Math.abs(best.o || 0));
    updateBuildSummary();
    $("warning").textContent = `Dyno complete: peak ${Math.round(best.p)} ${unit} at ${Math.round(best.r)} rpm. Build summary updated.`;
    $("dynoBtn").classList.remove("active");
  }else{
    state.dynoData.push({r:state.rpm, p:state.power, o:state.output, b:state.aux || 0, t:state.temp || 20});
  }
}

function roundRect(x,y,w,h,r,fill,stroke){
  ctx.beginPath();
  ctx.moveTo(x+r,y);
  ctx.arcTo(x+w,y,x+w,y+h,r);
  ctx.arcTo(x+w,y+h,x,y+h,r);
  ctx.arcTo(x,y+h,x,y,r);
  ctx.arcTo(x,y,x+w,y,r);
  if(fill) ctx.fill();
  if(stroke) ctx.stroke();
}

function drawToothedGear(x, y, radius, teeth, angle, fill, stroke, label, active=false){
  const outer = radius + Math.max(2.2, radius * .13);
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.beginPath();
  const steps = Math.max(10, teeth * 2);
  for(let i=0;i<steps;i++){
    const a = i * Math.PI * 2 / steps;
    const r = i % 2 === 0 ? outer : radius;
    const px = Math.cos(a) * r;
    const py = Math.sin(a) * r;
    if(i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
  }
  ctx.closePath();
  if(active){
    ctx.shadowColor = "rgba(216,191,122,.8)";
    ctx.shadowBlur = 14;
  }
  ctx.fillStyle = fill;
  ctx.strokeStyle = stroke;
  ctx.lineWidth = active ? 3 : 2;
  ctx.fill();
  ctx.stroke();
  ctx.shadowBlur = 0;

  ctx.strokeStyle = "rgba(255,255,255,.72)";
  ctx.lineWidth = Math.max(1.2, radius * .075);
  const spokes = radius > 18 ? 6 : 4;
  for(let i=0;i<spokes;i++){
    ctx.rotate(Math.PI * 2 / spokes);
    ctx.beginPath();
    ctx.moveTo(radius * .22, 0);
    ctx.lineTo(radius * .78, 0);
    ctx.stroke();
  }
  ctx.fillStyle = active ? "#f8e7a5" : "#cbd5e1";
  ctx.beginPath();
  ctx.arc(0, 0, radius * .30, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "rgba(20,28,38,.9)";
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.restore();

  if(label){
    ctx.fillStyle = active ? "#f8e7a5" : "#9fb0c2";
    ctx.font = "bold 10px system-ui";
    ctx.textAlign = "center";
    ctx.fillText(label, x, y - radius - 12);
    ctx.textAlign = "start";
  }
}

function toothedOuterRadius(radius){
  return radius + Math.max(2.2, radius * .13);
}

function drawSmoothWheel(x, y, radius, angle, fill, stroke, label, active=false){
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  if(active){
    ctx.shadowColor = "rgba(216,191,122,.62)";
    ctx.shadowBlur = 12;
  }
  ctx.fillStyle = fill;
  ctx.strokeStyle = stroke;
  ctx.lineWidth = active ? 3 : 2;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.shadowBlur = 0;

  ctx.strokeStyle = "rgba(255,255,255,.58)";
  ctx.lineWidth = Math.max(1.4, radius * .08);
  for(let i=0;i<6;i++){
    ctx.rotate(Math.PI / 3);
    ctx.beginPath();
    ctx.moveTo(radius * .22, 0);
    ctx.lineTo(radius * .82, 0);
    ctx.stroke();
  }
  ctx.fillStyle = active ? "#f8e7a5" : "#cbd5e1";
  ctx.beginPath();
  ctx.arc(0, 0, radius * .24, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  if(label){
    ctx.fillStyle = active ? "#f8e7a5" : "#9fb0c2";
    ctx.font = "bold 10px system-ui";
    ctx.textAlign = "center";
    ctx.fillText(label, x, y + radius + 16);
    ctx.textAlign = "start";
  }
}

function engineIdleRpm(cfg=getConfig()){
  if(cfg.family === "piston") return state.type === "radial" ? 700 : 820;
  if(cfg.family === "rotary") return 1100;
  if(cfg.family === "electric") return 0;
  if(cfg.family === "external") return 200;
  if(cfg.family === "linear" || cfg.family === "hydraulic") return 500;
  if(cfg.family === "jet") return state.type === "turboprop" ? 1200 : 2200;
  return 800;
}

function drawGearboxAssembly(cx, cy, scale){
  const cfg = getConfig();
  if(!gearboxVisualApplies(cfg) || state.gearboxAnimation === false) return;

  const gearCount = Math.max(1, Math.min(10, Math.round(state.gearCount || 7)));
  const selector = normalizeGearSelector();
  const activeGear = selector === "D" ? Math.max(1, Math.min(gearCount, state.gear || 1)) : 0;
  const idleRpm = engineIdleRpm(cfg);
  const starterActive = ((state.starterTimer || 0) > 0 && idleRpm > 0 && state.rpm < idleRpm * .96) || !!state.starterEngaged;
  const starterGrinding = starterActive && !!state.starterGrinding;
  const now = typeof performance !== "undefined" ? performance.now() / 1000 : Date.now() / 1000;
  const inputAngle = state.crank;
  const gearboxLocked = selector === "P";
  const finalDriveCoupled = selector === "D" || selector === "R";
  const gearInputAngle = gearboxLocked ? 0 : inputAngle;
  const outputRatio = selector === "D"
    ? Math.max(.16, Math.abs(currentGearRatio()) / Math.max(1, state.finalDrive))
    : selector === "R" ? .38 : .12;
  const outputAngle = selector === "D"
    ? state.crank * outputRatio
    : selector === "R"
      ? -state.crank * outputRatio
      : selector === "N"
        ? gearInputAngle * .36
        : 0;
  const finalDriveSpinning = finalDriveCoupled && Math.abs(state.speed || 0) > .2;
  const finalAngle = finalDriveSpinning
    ? now * Math.sign(state.speed || (selector === "R" ? -1 : 1)) * Math.max(.55, Math.abs(state.speed || 0) * .16)
    : 0;

  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(scale, scale);

  const shaftY = cfg.family === "rotary" ? 0 : 80;
  const boxX = 342;
  const boxW = 396;
  const gearR = Math.max(13.5, Math.min(22, (boxW - 96) / Math.max(2, gearCount * 2.26)));
  const smallGearR = gearR * .56;
  const largeGearR = gearR * 1.32;
  const selectorR = Math.max(8.5, gearR * .48);
  const selectorOuter = toothedOuterRadius(selectorR);
  const rowGap = (toothedOuterRadius(smallGearR) + selectorOuter - .8) * 2;
  const inputY = shaftY;
  const outputY = inputY + rowGap;
  const midY = (inputY + outputY) * .5;
  const boxY = inputY - 64;
  const boxH = rowGap + 148;
  const gearRadiusAt = (i, topRow=true) => {
    const t = gearCount <= 1 ? .5 : (i - 1) / (gearCount - 1);
    const grow = topRow ? t : 1 - t;
    return smallGearR + (largeGearR - smallGearR) * grow;
  };
  const gearOuterAt = (i, topRow=true) => toothedOuterRadius(gearRadiusAt(i, topRow));
  const gearOffsets = [0];
  for(let i=1;i<gearCount;i++){
    const topTouch = gearOuterAt(i, true) + gearOuterAt(i + 1, true);
    const bottomTouch = gearOuterAt(i, false) + gearOuterAt(i + 1, false);
    gearOffsets.push(gearOffsets[i - 1] + Math.min(topTouch, bottomTouch) - 1.4);
  }
  const rowSpan = gearOffsets[gearOffsets.length - 1] || 0;
  const left = boxX + (boxW - rowSpan) * .5;
  const gearXAt = index => {
    if(gearCount <= 1) return left;
    const clamped = Math.max(1, Math.min(gearCount, index));
    const lower = Math.floor(clamped);
    const upper = Math.ceil(clamped);
    if(lower === upper) return left + gearOffsets[lower - 1];
    const t = clamped - lower;
    return left + gearOffsets[lower - 1] + (gearOffsets[upper - 1] - gearOffsets[lower - 1]) * t;
  };

  ctx.strokeStyle = "#d7dee9";
  ctx.lineWidth = 9;
  ctx.beginPath();
  ctx.moveTo(218, shaftY);
  ctx.lineTo(boxX + boxW - 24, shaftY);
  ctx.stroke();
  ctx.strokeStyle = "rgba(136,153,171,.8)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(220, shaftY + 10);
  ctx.lineTo(boxX + boxW - 30, shaftY + 10);
  ctx.stroke();

  ctx.save();
  ctx.translate(284, shaftY);
  ctx.rotate(inputAngle);
  drawToothedGear(0, 0, 42, 28, 0, "#303946", "#d8bf7a", "", starterActive);
  ctx.strokeStyle = "#f8ecd0";
  ctx.lineWidth = 5;
  for(let i=0;i<6;i++){
    ctx.rotate(Math.PI / 3);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(34, 0);
    ctx.stroke();
  }
  ctx.restore();

  ctx.fillStyle = "#d8bf7a";
  ctx.font = "bold 10px system-ui";
  ctx.fillText("FLYWHEEL", 254, shaftY + 54);

  ctx.fillStyle = "#17212d";
  ctx.strokeStyle = starterGrinding ? "#ef4444" : starterActive ? "#facc15" : "#64748b";
  ctx.lineWidth = 2;
  roundRect(224, shaftY + 62, 108, 42, 17, true, true);
  ctx.fillStyle = starterGrinding ? "#fee2e2" : starterActive ? "#fef3c7" : "#9fb0c2";
  ctx.font = "bold 11px system-ui";
  ctx.fillText(starterGrinding ? "METAL GRIND" : starterActive ? "STARTER ENGAGED" : "STARTER MOTOR", 234, shaftY + 88);
  const starterGearAngle = starterActive ? (state.starterMotorAngle || 0) : 0;
  drawToothedGear(310, shaftY + 50, 13, 12, starterGearAngle, "#475569", starterGrinding ? "#ef4444" : starterActive ? "#facc15" : "#94a3b8", "", starterActive);
  if(starterActive){
    ctx.strokeStyle = starterGrinding ? "rgba(248,113,113,.78)" : "rgba(250,204,21,.72)";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(302, shaftY + 40);
    ctx.lineTo(292, shaftY + 16);
    ctx.stroke();
    if(starterGrinding){
      ctx.fillStyle = "#f97316";
      for(let i=0;i<7;i++){
        const a = now * 18 + i * .9;
        ctx.beginPath();
        ctx.arc(296 + Math.cos(a) * (8 + i), shaftY + 31 + Math.sin(a * 1.4) * 10, 1.7, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = "#fecaca";
      ctx.font = "bold 9px system-ui";
      ctx.fillText(`${Math.round(state.rpm || 0)} rpm flywheel`, 224, shaftY + 116);
      ctx.fillText(`${Math.round(state.starterMotorRpm || 0)} rpm starter`, 224, shaftY + 128);
    }
  }

  ctx.fillStyle = "#111821";
  ctx.strokeStyle = "#344255";
  ctx.lineWidth = 4;
  roundRect(boxX, boxY, boxW, boxH, 24, true, true);
  ctx.fillStyle = "rgba(255,255,255,.05)";
  roundRect(boxX + 10, boxY + 10, boxW - 20, boxH - 20, 18, true, false);

  ctx.strokeStyle = "#d7dee9";
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(boxX + 20, inputY);
  ctx.lineTo(boxX + boxW - 26, inputY);
  ctx.moveTo(boxX + 20, outputY);
  ctx.lineTo(boxX + boxW - 26, outputY);
  ctx.stroke();
  ctx.strokeStyle = "#64748b";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(boxX + 20, inputY + 8);
  ctx.lineTo(boxX + boxW - 26, inputY + 8);
  ctx.moveTo(boxX + 20, outputY + 8);
  ctx.lineTo(boxX + boxW - 26, outputY + 8);
  ctx.stroke();

  for(let i=1;i<=gearCount;i++){
    const x = gearXAt(i);
    const engaged = i === activeGear && selector === "D";
    const spinMult = engaged ? outputRatio : .22 + i * .015;
    const topR = gearRadiusAt(i, true);
    const bottomR = gearRadiusAt(i, false);
    drawToothedGear(x, inputY, topR, Math.round(12 + topR * .72), gearInputAngle * spinMult + i * .18, engaged ? "#b99a55" : "#2d3745", engaged ? "#f8e7a5" : "#94a3b8", String(i), engaged);
    drawToothedGear(x, outputY, bottomR, Math.round(12 + bottomR * .72), -outputAngle * (engaged ? 1.25 : .35) - i * .21, engaged ? "#d8bf7a" : "#273241", engaged ? "#f8e7a5" : "#7f90a5", "", engaged);
    if(engaged){
      ctx.fillStyle = "#f8e7a5";
      roundRect(x - 15, midY - 8, 30, 16, 6, true, false);
    }
  }
  const targetRunnerGear = selector === "D"
    ? activeGear
    : selector === "R"
      ? 1
      : Math.max(1, Math.min(gearCount, state.shiftFromGear || 1));
  const fromRunnerGear = Math.max(1, Math.min(gearCount, state.shiftFromGear || targetRunnerGear));
  const shiftDuration = Math.max(.01, state.shiftDuration || (state.transmissionType === "dct" ? .16 : .48));
  const shiftProgress = state.shiftTimer > 0
    ? 1 - Math.max(0, Math.min(1, state.shiftTimer / shiftDuration))
    : 1;
  const easedShift = shiftProgress * shiftProgress * (3 - 2 * shiftProgress);
  const runnerIndex = fromRunnerGear + (targetRunnerGear - fromRunnerGear) * easedShift;
  const runnerX = gearXAt(runnerIndex);
  const runnerActive = selector === "D" || selector === "R";
  ctx.strokeStyle = "rgba(148,163,184,.35)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(left, midY);
  ctx.lineTo(left + rowSpan, midY);
  ctx.stroke();
  drawToothedGear(
    runnerX,
    midY,
    selectorR,
    Math.round(10 + selectorR * .9),
    gearboxLocked ? 0 : runnerActive ? -gearInputAngle * Math.max(.55, outputRatio) : -gearInputAngle * .25,
    runnerActive ? "#f59e0b" : "#475569",
    runnerActive ? "#f8e7a5" : "#94a3b8",
    "",
    runnerActive
  );

  if(selector === "R"){
    const reverseX = left - (gearOuterAt(1, true) + selectorOuter - 1.2);
    drawToothedGear(reverseX, midY, selectorR, Math.round(10 + selectorR * .9), -gearInputAngle * .65, "#78350f", "#fb923c", "R", true);
  }
  if(selector === "P"){
    ctx.fillStyle = "#ef4444";
    roundRect(boxX + 20, inputY - 26, 24, 52, 5, true, false);
    ctx.fillStyle = "#fee2e2";
    ctx.font = "bold 10px system-ui";
    ctx.fillText("PARK PAWL", boxX + 50, inputY - 10);
  }

  const diffX = boxX + boxW + 38;
  const finalR = Math.max(28, Math.min(42, rowGap * .78));
  ctx.strokeStyle = "#d7dee9";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(boxX + boxW - 26, outputY);
  ctx.lineTo(diffX - finalR + 4, outputY);
  ctx.stroke();
  ctx.strokeStyle = "rgba(136,153,171,.8)";
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(boxX + boxW - 26, outputY + 8);
  ctx.lineTo(diffX - finalR + 4, outputY + 8);
  ctx.stroke();
  drawSmoothWheel(diffX, outputY, finalR, finalAngle, "#1f2937", "#d8bf7a", "", finalDriveSpinning);

  ctx.fillStyle = "#bfdbfe";
  ctx.font = "bold 12px system-ui";
  ctx.fillText(`${gearCount}-SPEED ${state.transmissionType.toUpperCase()} GEARBOX`, boxX + 18, boxY + 24);
  ctx.fillStyle = "#9fb0c2";
  ctx.font = "bold 10px system-ui";
  ctx.fillText(`selector ${selector}  final ${state.finalDrive.toFixed(2)}:1`, boxX + 18, boxY + boxH - 18);
  ctx.fillText("FINAL DRIVE", diffX - 34, outputY + finalR + 18);

  ctx.restore();
}


function isHybridType(){
  return state.hybridSystem !== "none" || state.type === "mild_hybrid" || state.type === "full_hybrid" || state.type === "plug_in_hybrid";
}

function isFuelCellActive(){
  return state.hybridSystem === "fuel_cell" || state.type === "fuel_cell";
}

function isTurboType(){
  return state.turboAddon !== "none" || state.type === "turbo_i4" || state.type === "turbo_v6" || state.type === "twin_turbo_v8";
}

function turboBoostLevel(){
  const map = {none:0, single:1.05, twin:1.45, tri:1.62, quad:1.82, supercharger:1.12, electric:1.25, compound:.75};
  if(state.type === "turbo_i4") return Math.max(map[state.turboAddon] || 0, 1.2);
  if(state.type === "turbo_v6") return Math.max(map[state.turboAddon] || 0, 1.4);
  if(state.type === "twin_turbo_v8") return Math.max(map[state.turboAddon] || 0, 1.6);
  return map[state.turboAddon] || 0;
}

function hybridAssistHp(){
  const intensity = state.systemPower / 100;
  const base = {none:0, mild:35, full:120, plugin:240, fuel_cell:180}[state.hybridSystem] || 0;
  return base * (.45 + intensity*.75);
}

function drawHybridMotorOnShaft(){
  if(!isHybridType()) return;
  ctx.save();
  ctx.strokeStyle = "#93c5fd";
  ctx.fillStyle = "#13283a";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(220,80);
  ctx.lineTo(330,80);
  ctx.stroke();
  roundRect(292,34,96,92,24,true,true);
  ctx.save();
  ctx.translate(340,80);
  ctx.rotate(state.crank * 2.4);
  ctx.strokeStyle = "#dbeafe";
  ctx.lineWidth = 6;
  for(let i=0;i<6;i++){
    ctx.rotate(Math.PI / 3);
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(30,0);
    ctx.stroke();
  }
  ctx.restore();
  ctx.fillStyle = "#bfdbfe";
  ctx.font = "bold 12px system-ui";
  const hLabel = state.hybridSystem === "mild" ? "48V MGU" : state.hybridSystem === "full" ? "E-MOTOR" : state.hybridSystem === "plugin" ? "PHEV MOTOR" : state.hybridSystem === "fuel_cell" ? "FCEV MOTOR" : state.type === "mild_hybrid" ? "48V MGU" : state.type === "full_hybrid" ? "E-MOTOR" : "PHEV MOTOR";
  ctx.fillText(hLabel, 303, 148);
  ctx.restore();
}

function drawTurboWheel(radius=24, blades=9, spin=1){
  ctx.save();
  ctx.rotate(state.crank * spin);
  for(let i=0;i<blades;i++){
    ctx.rotate(Math.PI * 2 / blades);
    const grad = ctx.createLinearGradient(0,-radius*.34,radius,radius*.34);
    grad.addColorStop(0,"#f8fbff");
    grad.addColorStop(.45,"#93c5fd");
    grad.addColorStop(1,"#475569");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(3,0);
    ctx.quadraticCurveTo(radius*.42,-radius*.30,radius*.88,-radius*.08);
    ctx.quadraticCurveTo(radius*.58,radius*.22,8,radius*.16);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();
  ctx.fillStyle = "#e2e8f0";
  ctx.beginPath(); ctx.arc(0,0,radius*.20,0,Math.PI*2); ctx.fill();
}

function drawTurboHardware(){
  if(!isTurboType()) return;

  if(state.turboAddon === "supercharger"){
    ctx.save();
    ctx.translate(0,-92);
    ctx.fillStyle = "#242c37";
    ctx.strokeStyle = "#d7dee9";
    ctx.lineWidth = 4;
    roundRect(-74,-32,148,64,16,true,true);
    roundRect(-48,-18,96,36,10,true,true);
    // intake hat
    ctx.fillStyle = "#1a212b";
    roundRect(-26,-54,52,22,8,true,true);
    // blower rotors
    ctx.strokeStyle = "#93c5fd";
    ctx.lineWidth = 6;
    for(const y of [-8,8]){
      ctx.beginPath(); ctx.moveTo(-42,y); ctx.lineTo(42,y); ctx.stroke();
      for(let i=0;i<5;i++){
        const lx = -36 + i*18 + Math.sin(state.crank*1.6 + i) * 2;
        ctx.beginPath(); ctx.moveTo(lx-4,y-8); ctx.lineTo(lx+4,y+8); ctx.stroke();
      }
    }
    // belt to crank
    ctx.strokeStyle = "#111827";
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(74,4);
    ctx.bezierCurveTo(122,18,165,38,190,78);
    ctx.stroke();
    ctx.fillStyle = "#cbd5e1";
    ctx.beginPath(); ctx.arc(192,82,20,0,Math.PI*2); ctx.fill();
    ctx.fillStyle = "#1f2937";
    ctx.beginPath(); ctx.arc(192,82,12,0,Math.PI*2); ctx.fill();
    ctx.fillStyle = "#bfdbfe"; ctx.font = "bold 12px system-ui"; ctx.fillText("SUPERCHARGED", -50, 54);
    ctx.restore();
    return;
  }

  const counts = {single:1, twin:2, tri:3, quad:4, electric:1, compound:1};
  const count = counts[state.turboAddon] || (state.type === "twin_turbo_v8" ? 2 : 1);
  const presets = {
    1:[[310,-70]],
    2:[[-320,-90],[320,-90]],
    3:[[-320,-94],[0,-126],[320,-94]],
    4:[[-335,-98],[-110,-126],[110,-126],[335,-98]]
  };
  const spots = presets[count] || presets[1];
  spots.forEach(([x,y], idx)=>{
    ctx.save();
    ctx.translate(x,y);
    ctx.strokeStyle = "#cbd5e1";
    ctx.fillStyle = "#1f2937";
    ctx.lineWidth = 4;
    ctx.beginPath(); ctx.arc(0,0,34,0,Math.PI*2); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = "#e2e8f0";
    ctx.beginPath(); ctx.arc(0,0,25,0,Math.PI*2); ctx.stroke();
    drawTurboWheel(25, 10, 3.2 + idx*.35);
    if(state.pipesVisible !== false){
      ctx.strokeStyle = chromePipeGradient(-82,34,-28,8,true); ctx.lineWidth = 6;
      ctx.beginPath(); ctx.moveTo(Math.sign(x||1)*-28,8); ctx.quadraticCurveTo(Math.sign(x||1)*-58,22,Math.sign(x||1)*-82,34); ctx.stroke();
      ctx.strokeStyle = chromePipeGradient(18,-12,66,-4,false); ctx.lineWidth = 5;
      ctx.beginPath(); ctx.moveTo(18,-12); ctx.quadraticCurveTo(48,-12,66,-4); ctx.stroke();
    }
    if(state.turboAddon === "electric"){
      ctx.fillStyle="#d8bf7a"; ctx.fillRect(-11,-48,22,16);
      ctx.strokeStyle="#d8bf7a"; ctx.beginPath(); ctx.moveTo(0,-32); ctx.lineTo(0,-18); ctx.stroke();
    }
    if(state.turboAddon === "compound"){
      ctx.strokeStyle="#d8bf7a"; ctx.beginPath(); ctx.arc(0,0,44,0,Math.PI*2); ctx.stroke();
    }
    ctx.restore();
  });
  ctx.save();
  ctx.fillStyle = "#bfdbfe"; ctx.font = "bold 12px system-ui";
  const label = state.turboAddon === "twin" || state.type === "twin_turbo_v8" ? "TWIN TURBO" :
    state.turboAddon === "tri" ? "TRI TURBO" :
    state.turboAddon === "quad" ? "QUAD TURBO" :
    state.turboAddon === "electric" ? "E-TURBO" :
    state.turboAddon === "compound" ? "RECOVERY" : "BOOST";
  ctx.fillText(label, count >= 3 ? -38 : -28, 156);
  ctx.restore();
}

function drawDetailedValveTrain(localX, baseY, angle, phase){
  ctx.save();
  ctx.translate(localX, baseY);
  ctx.rotate(angle);

  // Cylinder head casting
  ctx.fillStyle = "#2c3a49";
  ctx.strokeStyle = "#8ba0b6";
  ctx.lineWidth = 1.8;
  roundRect(-25,-112,50,16,6,true,true);
  roundRect(-23,-99,46,10,5,true,true);

  // Port flange plates
  ctx.fillStyle = "#344354";
  ctx.strokeStyle = "#93a7bb";
  roundRect(-24,-107,20,8,3,true,true);
  roundRect(4,-107,20,8,3,true,true);

  // Intake and exhaust ports
  ctx.fillStyle = "#0b1220";
  ctx.strokeStyle = "#50667d";
  ctx.lineWidth = 1.2;
  ctx.beginPath(); ctx.ellipse(-14,-103,8,4,0,0,Math.PI*2); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.ellipse(14,-103,8,4,0,0,Math.PI*2); ctx.fill(); ctx.stroke();

  if(state.pipesVisible !== false){
    // Short port stubs only. The visible long runners are merged later by
    // drawSharedEngineManifold() into one top intake pipe and one bottom exhaust pipe.
    ctx.lineCap = "round";
    const intakeGrad = chromePipeGradient(-34,-116,-8,-96,false);
    ctx.strokeStyle = intakeGrad;
    ctx.lineWidth = 5.4;
    ctx.beginPath();
    ctx.moveTo(-15,-103);
    ctx.lineTo(-34,-113);
    ctx.moveTo(-7,-102);
    ctx.lineTo(-29,-117);
    ctx.stroke();
    ctx.strokeStyle = "rgba(255,255,255,.22)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(-15,-104);
    ctx.lineTo(-31,-112);
    ctx.moveTo(-7,-103);
    ctx.lineTo(-26,-116);
    ctx.stroke();

    const exGrad = chromePipeGradient(7,-103,38,-118,true);
    ctx.strokeStyle = exGrad;
    ctx.lineWidth = 5.8;
    ctx.beginPath();
    ctx.moveTo(7,-102);
    ctx.lineTo(31,-114);
    ctx.moveTo(15,-103);
    ctx.lineTo(38,-118);
    ctx.stroke();
    ctx.strokeStyle = "rgba(255,255,255,.18)";
    ctx.lineWidth = 1.3;
    ctx.beginPath();
    ctx.moveTo(9,-103);
    ctx.lineTo(30,-113);
    ctx.moveTo(17,-104);
    ctx.lineTo(36,-117);
    ctx.stroke();
  }

  // Injector / spark plug body in center
  ctx.fillStyle = "#e6eef8";
  ctx.strokeStyle = "#94a3b8";
  ctx.lineWidth = 1.1;
  ctx.save();
  ctx.rotate(.18);
  roundRect(-3.5,-126,7,28,3,true,true);
  ctx.restore();
  ctx.fillStyle = "#60a5fa";
  ctx.beginPath(); ctx.arc(0,-96,3.2,0,Math.PI*2); ctx.fill();

  const intakeOpen = Math.max(0, Math.sin(phase + Math.PI * .15));
  const exhaustOpen = Math.max(0, Math.sin(phase + Math.PI * 1.05));
  const valveData = [
    {x:-13, open:intakeOpen, color:"#dbeafe", seat:"#93c5fd", tilt:-.10, kind:"intake"},
    {x:-5,  open:intakeOpen*.9, color:"#dbeafe", seat:"#93c5fd", tilt:-.04, kind:"intake"},
    {x:5,   open:exhaustOpen*.9, color:"#fee2e2", seat:"#fca5a5", tilt:.04, kind:"exhaust"},
    {x:13,  open:exhaustOpen, color:"#fee2e2", seat:"#fca5a5", tilt:.10, kind:"exhaust"}
  ];

  valveData.forEach(v => {
    const lift = v.open * (v.kind === "intake" ? 7.5 : 6.1);
    ctx.save();
    ctx.translate(v.x, 0);
    ctx.rotate(v.tilt);

    ctx.fillStyle = "#cbd5e1";
    roundRect(-4.8,-103,9.6,5.5,2,true,false);

    ctx.strokeStyle = v.kind === "intake" ? "#9fb5cc" : "#c9a39a";
    ctx.lineWidth = 1.15;
    for(let s=0;s<7;s++){
      const yy = -98 + s*2.8 + lift*.24;
      ctx.beginPath();
      ctx.moveTo(-4.8, yy);
      ctx.lineTo(4.8, yy + 1.5);
      ctx.stroke();
    }

    ctx.strokeStyle = v.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0,-98);
    ctx.lineTo(0,-75 + lift);
    ctx.stroke();

    ctx.fillStyle = v.seat;
    ctx.beginPath();
    ctx.ellipse(0,-72 + lift,5.4,2.8,0,0,Math.PI*2);
    ctx.fill();
    ctx.strokeStyle = "#e5eef8";
    ctx.lineWidth = .8;
    ctx.stroke();

    ctx.restore();
  });

  // Fuel spray during intake stroke.
  const th = getThrottle ? getThrottle() : 0;
  const sprayAmount = Math.max(0, intakeOpen * (state.on ? (.25 + th) : 0));
  if(sprayAmount > .02){
    ctx.save();
    ctx.globalAlpha = Math.min(.85, sprayAmount);
    const mist = ctx.createLinearGradient(0,-94,-10,-66);
    mist.addColorStop(0,"rgba(96,165,250,.95)");
    mist.addColorStop(.55,"rgba(125,211,252,.42)");
    mist.addColorStop(1,"rgba(96,165,250,0)");
    ctx.fillStyle = mist;
    ctx.beginPath();
    ctx.moveTo(0,-94);
    ctx.lineTo(-18,-66);
    ctx.lineTo(6,-70);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = state.fuel > 1.08 ? "rgba(251,146,60,.78)" : state.fuel < .92 ? "rgba(125,211,252,.75)" : "rgba(147,197,253,.78)";
    for(let d=0; d<10; d++){
      const jitter = Math.sin(state.crank*2 + d*1.7);
      const dx = -2 - d*1.35 + jitter*2.2;
      const dy = -88 + d*2.5 + Math.cos(state.crank+d)*1.8;
      ctx.beginPath();
      ctx.arc(dx,dy,1.15 + (d%3)*.25,0,Math.PI*2);
      ctx.fill();
    }
    ctx.restore();
  }

  ctx.restore();
}

function drawCamBankAssembly(spec){
  if(!spec.positions.length) return;

  // IMPORTANT: positions are global engine-space x coordinates, but the cam bank is
  // drawn after translating to the bank center. Convert them to local coordinates so
  // the camshafts do not stretch/rotate across the whole scene.
  const positions = spec.positions.map(px => px - spec.centerX);
  const minX = Math.min(...positions) - 24;
  const maxX = Math.max(...positions) + 24;
  const left = minX - 10;
  const right = maxX + 10;
  const width = right - left;

  ctx.save();
  ctx.translate(spec.centerX, spec.baseY);
  ctx.rotate(spec.angle);

  // compact head / cam carrier, closer to the reference image
  ctx.fillStyle = "#273442";
  ctx.strokeStyle = "#7f93aa";
  ctx.lineWidth = 2.2;
  roundRect(left,-124,width,16,7,true,true);
  roundRect(left,-108,width,12,6,true,true);

  // dual overhead camshafts
  const camYs = [-116,-100];
  const shaftLeft = left + 8;
  const shaftRight = right - 8;
  camYs.forEach((camY, camIndex) => {
    ctx.strokeStyle = "#dce5ef";
    ctx.lineWidth = 4.6;
    ctx.beginPath();
    ctx.moveTo(shaftLeft, camY);
    ctx.lineTo(shaftRight, camY);
    ctx.stroke();

    // journals/supports
    for(let j=0;j<Math.max(2, Math.ceil(positions.length/2)+1);j++){
      const px = shaftLeft + j * ((shaftRight-shaftLeft)/Math.max(1, Math.ceil(positions.length/2)));
      ctx.fillStyle = "#9fb0c2";
      roundRect(px-4, camY-8, 8, 16, 3, true, false);
    }

    positions.forEach((px, i) => {
      const phase = state.crank + (spec.offsets[i] || 0) + camIndex * .7;
      for(const lobeOff of [-7,7]){
        ctx.save();
        ctx.translate(px + lobeOff, camY);
        ctx.rotate(phase * .5 + lobeOff * .04);
        ctx.fillStyle = "#eef4fa";
        ctx.strokeStyle = "#b7c4d2";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(0,0,6.5,3.4,0,0,Math.PI*2);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }
    });
  });

  // timing chain and sprockets on the front side
  const chainX = left + 10;
  const crankGearY = -46;
  [camYs[0], camYs[1]].forEach(gy => {
    ctx.fillStyle = "#f0c85a";
    ctx.strokeStyle = "#c7a94b";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(chainX, gy, 9, 0, Math.PI*2);
    ctx.fill();
    ctx.stroke();
  });
  ctx.fillStyle = "#d8dde6";
  ctx.strokeStyle = "#bfc7d2";
  ctx.beginPath();
  ctx.arc(chainX, crankGearY, 11, 0, Math.PI*2);
  ctx.fill();
  ctx.stroke();

  ctx.strokeStyle = "#d6dbe3";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(chainX-5, camYs[0]-8);
  ctx.lineTo(chainX-5, crankGearY+10);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(chainX+14, camYs[1]-8);
  ctx.lineTo(chainX+14, crankGearY+10);
  ctx.stroke();
  for(let c=0;c<15;c++){
    const yy = camYs[0]-7 + c*4.8;
    ctx.strokeStyle = c % 2 ? "#aeb9c6" : "#eef2f7";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(chainX-8, yy);
    ctx.lineTo(chainX+17, yy+1);
    ctx.stroke();
  }

  // followers down to valves
  positions.forEach(px => {
    for(const vx of [px-8, px+8]){
      ctx.strokeStyle = "#dbe6f1";
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(vx,-96);
      ctx.lineTo(vx,-86);
      ctx.stroke();
    }
  });

  ctx.restore();
}

function drawDetailedCylinder(localX, baseY, angle, phase, fireActive){
  const pistonTravel = (Math.cos(phase) * .5 + .5) * 54;
  const journalX = localX;
  const journalY = 80;
  const crankRadius = 10;
  const crankPinX = journalX + Math.sin(phase) * crankRadius;
  const crankPinY = journalY + Math.cos(phase) * crankRadius;
  const pistonCx = localX + Math.sin(angle) * pistonTravel;
  const pistonCy = baseY - Math.cos(angle) * pistonTravel;

  ctx.save();
  ctx.translate(localX, baseY);
  ctx.rotate(angle);

  // cylinder barrel outer wall
  ctx.fillStyle = "#1f2a38";
  ctx.strokeStyle = "#5e7188";
  ctx.lineWidth = 2.2;
  roundRect(-23,-108,46,116,9,true,true);

  // cylinder liner
  ctx.fillStyle = "#111821";
  ctx.strokeStyle = "#3f5268";
  roundRect(-15,-96,30,96,7,true,true);

  // more realistic cylinder head + pent-roof combustion chamber
  ctx.fillStyle = "#314050";
  ctx.strokeStyle = "#90a3b7";
  roundRect(-25,-124,50,18,7,true,true);
  ctx.fillStyle = "#263646";
  roundRect(-21,-111,42,12,5,true,true);
  ctx.fillStyle = "#0c1016";
  ctx.beginPath();
  ctx.moveTo(-14,-96);
  ctx.lineTo(-5,-105);
  ctx.lineTo(5,-105);
  ctx.lineTo(14,-96);
  ctx.lineTo(10,-87);
  ctx.quadraticCurveTo(0,-92,-10,-87);
  ctx.closePath();
  ctx.fill();

  drawDetailedValveTrain(0, 0, 0, phase);

  if(fireActive){
    ctx.fillStyle = state.fuel < .9 ? "#60a5fa" : state.fuel > 1.1 ? "#fb923c" : "#facc15";
    ctx.globalAlpha = .9;
    ctx.beginPath();
    ctx.ellipse(0,-89,12 + Math.random()*4,10 + Math.random()*3,0,0,Math.PI*2);
    ctx.fill();
    ctx.globalAlpha = 1;
  }
  ctx.restore();

  // visible crank throw so the rod does not look like it is hovering
  ctx.strokeStyle = "#94a3b8";
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(journalX, journalY);
  ctx.lineTo(crankPinX, crankPinY);
  ctx.stroke();

  // cheek/web detail on the throw
  ctx.strokeStyle = "#64748b";
  ctx.lineWidth = 2.2;
  ctx.beginPath();
  ctx.moveTo(journalX - 4, journalY);
  ctx.lineTo(crankPinX - 4, crankPinY);
  ctx.moveTo(journalX + 4, journalY);
  ctx.lineTo(crankPinX + 4, crankPinY);
  ctx.stroke();

  // main journal in the shaft center
  ctx.fillStyle = "#e2e8f0";
  ctx.beginPath(); ctx.arc(journalX, journalY, 8.5, 0, Math.PI*2); ctx.fill();
  ctx.fillStyle = "#64748b";
  ctx.beginPath(); ctx.arc(journalX, journalY, 3.5, 0, Math.PI*2); ctx.fill();

  // piston with crown shape and wrist pin
  ctx.save();
  ctx.translate(pistonCx, pistonCy);
  ctx.rotate(angle);
  ctx.fillStyle = "#d9e1eb";
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 1.3;
  ctx.beginPath();
  ctx.moveTo(-22,11);
  ctx.lineTo(-22,-6);
  ctx.quadraticCurveTo(-10,-16,0,-18);
  ctx.quadraticCurveTo(10,-16,22,-6);
  ctx.lineTo(22,11);
  ctx.quadraticCurveTo(0,16,-22,11);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  // ring lands
  ctx.strokeStyle = "#8ea0b5";
  ctx.lineWidth = 1;
  for(const yy of [-10,-6,-2]){ ctx.beginPath(); ctx.moveTo(-18,yy); ctx.lineTo(18,yy); ctx.stroke(); }
  // wrist pin
  ctx.fillStyle = "#9fb0c2";
  ctx.beginPath(); ctx.ellipse(0,2,9,4,0,0,Math.PI*2); ctx.fill();
  ctx.restore();

  // conrod beam with small end + big end, connected to the visible crank pin
  ctx.strokeStyle = "#cbd5e1";
  ctx.lineWidth = 4.5;
  ctx.beginPath();
  ctx.moveTo(pistonCx, pistonCy + 2);
  ctx.lineTo(crankPinX, crankPinY);
  ctx.stroke();
  ctx.strokeStyle = "#8fa3bb";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(pistonCx-4, pistonCy + 2);
  ctx.lineTo(crankPinX-4, crankPinY);
  ctx.moveTo(pistonCx+4, pistonCy + 2);
  ctx.lineTo(crankPinX+4, crankPinY);
  ctx.stroke();
  ctx.fillStyle = "#e2e8f0";
  ctx.beginPath(); ctx.arc(pistonCx, pistonCy + 2, 5.2, 0, Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.arc(crankPinX, crankPinY, 8, 0, Math.PI*2); ctx.fill();
  ctx.fillStyle = "#64748b";
  ctx.beginPath(); ctx.arc(crankPinX, crankPinY, 3.4, 0, Math.PI*2); ctx.fill();
}

function rotatedPoint(originX, originY, angle, localX, localY){
  const c = Math.cos(angle), s = Math.sin(angle);
  return {
    x: originX + localX * c - localY * s,
    y: originY + localX * s + localY * c
  };
}

function drawThickCurve(from, c1, c2, to, width, stroke){
  ctx.strokeStyle = stroke;
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(from.x, from.y);
  ctx.bezierCurveTo(c1.x, c1.y, c2.x, c2.y, to.x, to.y);
  ctx.stroke();
}

function chromePipeGradient(x1, y1, x2, y2, hot=false){
  const g = ctx.createLinearGradient(x1, y1, x2, y2);
  g.addColorStop(0,"#6f7680");
  g.addColorStop(.18,"#f7fbff");
  g.addColorStop(.36,"#aeb7c2");
  g.addColorStop(.56, hot ? "#f0c07a" : "#e9edf2");
  g.addColorStop(.76,"#7d858f");
  g.addColorStop(1,"#f8fbff");
  return g;
}

function drawChromeBezier(from, c1, c2, to, width, hot=false){
  const grad = chromePipeGradient(from.x, from.y - width, to.x, to.y + width, hot);
  drawThickCurve(from, c1, c2, to, width, grad);
  ctx.strokeStyle = "rgba(255,255,255,.55)";
  ctx.lineWidth = Math.max(1.4, width * .12);
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(from.x, from.y - width * .22);
  ctx.bezierCurveTo(c1.x, c1.y - width * .22, c2.x, c2.y - width * .22, to.x, to.y - width * .22);
  ctx.stroke();
  return grad;
}

function drawChromeMergeNeck(collector, outlet, width, hot=false){
  const grad = chromePipeGradient(collector.x - width * 2.2, collector.y - width, outlet.x, outlet.y + width, hot);
  const startX = collector.x - width * 1.75;
  const midX = collector.x + width * .58;
  const endX = outlet.x;
  const endY = outlet.y;

  ctx.save();
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  for(let layer=0; layer<5; layer++){
    const t = layer / 4;
    const w = width * (.36 + t * .64);
    const yOff = (t - .5) * width * .18;
    ctx.strokeStyle = grad;
    ctx.lineWidth = w;
    ctx.beginPath();
    ctx.moveTo(startX + t * width * .24, collector.y + yOff);
    ctx.bezierCurveTo(
      collector.x - width * .78 + t * width * .18,
      collector.y - width * .30 + yOff,
      midX,
      collector.y + width * .32 - yOff,
      endX,
      endY
    );
    ctx.stroke();
  }
  ctx.strokeStyle = "rgba(255,255,255,.58)";
  ctx.lineWidth = Math.max(1.5, width * .13);
  ctx.beginPath();
  ctx.moveTo(startX + width * .18, collector.y - width * .16);
  ctx.bezierCurveTo(
    collector.x - width * .50,
    collector.y - width * .46,
    outlet.x - width * 2.1,
    outlet.y - width * .30,
    outlet.x - width * .25,
    outlet.y - width * .18
  );
  ctx.stroke();
  ctx.restore();
}

function drawExhaustOutletAir(outletX, outletY, direction=1){
  if(state.pipesVisible === false || !state.on || getThrottle() <= .04) return;
  ctx.save();
  ctx.lineCap = "round";
  for(let i=0;i<6;i++){
    const t = (state.crank * 18 + i * 19) % 92;
    const alpha = Math.max(0, 1 - t / 92) * (.16 + getThrottle() * .28);
    const y = outletY + Math.sin(state.crank * 1.8 + i) * 6 + (i - 2.5) * 2.2;
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = "rgba(220,230,238,.82)";
    ctx.lineWidth = 1.4 + (i % 2) * .5;
    ctx.beginPath();
    ctx.moveTo(outletX + direction * t, y);
    ctx.lineTo(outletX + direction * (t + 12), y - 3);
    ctx.stroke();
  }
  ctx.restore();
}

function drawGroupedBankManifold(spec){
  if(!spec || !spec.cylinders || !spec.cylinders.length) return;
  const cylinders = spec.cylinders;
  const mode = state.exhaustManifold || "equal_length_headers";
  const turboRoute = mode === "turbo_manifold" || (isTurboType && isTurboType());
  const avg = pts => pts.reduce((a,p)=>({x:a.x+p.x,y:a.y+p.y}), {x:0,y:0});
  const finishAvg = pts => { const p = avg(pts); return {x:p.x/pts.length, y:p.y/pts.length}; };

  const intakePorts = cylinders.map(c => rotatedPoint(c.x, c.baseY, c.angle, -33, -114));
  const exhaustPorts = cylinders.map(c => rotatedPoint(c.x, c.baseY, c.angle, 36, -116));
  const angle = spec.angle || 0;
  const xAxis = {x:Math.cos(angle), y:Math.sin(angle)};
  const upAxis = {x:Math.sin(angle), y:-Math.cos(angle)};
  const intakeAvg = finishAvg(intakePorts);
  const exhaustAvg = finishAvg(exhaustPorts);
  const runnerSpread = Math.min(28, Math.max(12, 46 / Math.max(1, cylinders.length)));

  const intakeCollector = {
    x:intakeAvg.x - xAxis.x * 64 + upAxis.x * 38,
    y:intakeAvg.y - xAxis.y * 64 + upAxis.y * 38
  };
  const intakeMain = {
    x:intakeCollector.x - xAxis.x * 94 + upAxis.x * 8,
    y:intakeCollector.y - xAxis.y * 94 + upAxis.y * 8
  };
  const intakeGrad = ctx.createLinearGradient(intakeMain.x, intakeMain.y, intakeCollector.x, intakeCollector.y);
  intakeGrad.addColorStop(0,"#22303f");
  intakeGrad.addColorStop(.5,"#91d5ff");
  intakeGrad.addColorStop(1,"#405568");
  intakePorts.forEach((port, i) => {
    const stagger = (i - (intakePorts.length - 1) / 2) * runnerSpread;
    const target = {
      x:intakeCollector.x + xAxis.x * stagger,
      y:intakeCollector.y + xAxis.y * stagger
    };
    drawThickCurve(
      port,
      {x:port.x - xAxis.x * 24 + upAxis.x * 16, y:port.y - xAxis.y * 24 + upAxis.y * 16},
      {x:target.x + xAxis.x * 22 - upAxis.x * 5, y:target.y + xAxis.y * 22 - upAxis.y * 5},
      target,
      5.8,
      intakeGrad
    );
  });
  ctx.strokeStyle = "#6d7f92";
  ctx.lineWidth = 15;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(intakeCollector.x, intakeCollector.y);
  ctx.lineTo(intakeMain.x, intakeMain.y);
  ctx.stroke();
  ctx.strokeStyle = "rgba(255,255,255,.28)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(intakeCollector.x + upAxis.x * 4, intakeCollector.y + upAxis.y * 4);
  ctx.lineTo(intakeMain.x + upAxis.x * 4, intakeMain.y + upAxis.y * 4);
  ctx.stroke();
  ctx.fillStyle = "#22303f";
  ctx.strokeStyle = "#90a4b8";
  ctx.lineWidth = 1.8;
  ctx.beginPath();
  ctx.ellipse(intakeCollector.x, intakeCollector.y, 28, 13, angle, 0, Math.PI*2);
  ctx.fill();
  ctx.stroke();

  const heat = .35 + Math.min(.65, (state.temp || 20) / 140);
  const chrome = mode === "equal_length_headers" || mode === "race_merged_collector" || mode === "shorty_headers";
  const exhaustGrad = ctx.createLinearGradient(exhaustAvg.x, exhaustAvg.y, exhaustAvg.x + xAxis.x * 160, exhaustAvg.y + xAxis.y * 160);
  if(chrome){
    exhaustGrad.addColorStop(0,"#dce3eb");
    exhaustGrad.addColorStop(.28,"#fff7d6");
    exhaustGrad.addColorStop(.58,`rgba(${Math.round(220+20*heat)},${Math.round(170-20*heat)},${Math.round(105-20*heat)},1)`);
    exhaustGrad.addColorStop(1,"#7b8490");
  }else{
    exhaustGrad.addColorStop(0,"#535b64");
    exhaustGrad.addColorStop(.55,"#7a5a36");
    exhaustGrad.addColorStop(1,"#343a42");
  }

  const mergeDistance = mode === "compact_cast" ? 46 : mode === "shorty_headers" ? 72 : mode === "race_merged_collector" ? 122 : 104;
  const headerLift = mode === "compact_cast" ? 18 : mode === "shorty_headers" ? 28 : 54;
  const collector = {
    x:exhaustAvg.x + xAxis.x * mergeDistance + upAxis.x * headerLift,
    y:exhaustAvg.y + xAxis.y * mergeDistance + upAxis.y * headerLift
  };
  exhaustPorts.forEach((port, i) => {
    const stagger = (i - (exhaustPorts.length - 1) / 2) * runnerSpread;
    const target = {
      x:collector.x + xAxis.x * stagger * .45,
      y:collector.y + xAxis.y * stagger * .45
    };
    const loop = mode === "equal_length_headers" ? 28 + (i % 2) * 18 : mode === "race_merged_collector" ? 22 : 0;
    drawThickCurve(
      port,
      {x:port.x + xAxis.x * (24 + loop) + upAxis.x * (14 + loop * .45), y:port.y + xAxis.y * (24 + loop) + upAxis.y * (14 + loop * .45)},
      {x:target.x - xAxis.x * (24 + loop * .35) + upAxis.x * (mode === "compact_cast" ? 2 : -10), y:target.y - xAxis.y * (24 + loop * .35) + upAxis.y * (mode === "compact_cast" ? 2 : -10)},
      target,
      mode === "compact_cast" ? 8.5 : 6.8,
      exhaustGrad
    );
  });

  ctx.fillStyle = chrome ? "#b9c2cc" : "#4b5563";
  ctx.strokeStyle = chrome ? "#fff7d6" : "#7a5a36";
  ctx.lineWidth = 1.6;
  ctx.beginPath();
  ctx.ellipse(collector.x, collector.y, mode === "race_merged_collector" ? 32 : 24, mode === "compact_cast" ? 15 : 12, angle, 0, Math.PI*2);
  ctx.fill();
  ctx.stroke();

  const outletLen = turboRoute ? 90 : mode === "race_merged_collector" ? 160 : 128;
  const outletEnd = {
    x:collector.x + xAxis.x * outletLen + upAxis.x * (turboRoute ? -18 : 0),
    y:collector.y + xAxis.y * outletLen + upAxis.y * (turboRoute ? -18 : 0)
  };
  ctx.strokeStyle = exhaustGrad;
  ctx.lineWidth = mode === "compact_cast" ? 14 : 16;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(collector.x, collector.y);
  ctx.bezierCurveTo(
    collector.x + xAxis.x * outletLen * .36,
    collector.y + xAxis.y * outletLen * .36,
    outletEnd.x - xAxis.x * 30,
    outletEnd.y - xAxis.y * 30,
    outletEnd.x,
    outletEnd.y
  );
  ctx.stroke();
  ctx.strokeStyle = "rgba(255,255,255,.38)";
  ctx.lineWidth = 2.2;
  ctx.beginPath();
  ctx.moveTo(collector.x + upAxis.x * 4, collector.y + upAxis.y * 4);
  ctx.bezierCurveTo(
    collector.x + xAxis.x * outletLen * .34 + upAxis.x * 4,
    collector.y + xAxis.y * outletLen * .34 + upAxis.y * 4,
    outletEnd.x - xAxis.x * 34 + upAxis.x * 4,
    outletEnd.y - xAxis.y * 34 + upAxis.y * 4,
    outletEnd.x + upAxis.x * 4,
    outletEnd.y + upAxis.y * 4
  );
  ctx.stroke();

  if(turboRoute){
    ctx.fillStyle = "#1f2937";
    ctx.strokeStyle = "#cbd5e1";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(outletEnd.x + xAxis.x * 20, outletEnd.y + xAxis.y * 20, 22, 0, Math.PI*2);
    ctx.fill();
    ctx.stroke();
  }
}

function drawSharedEngineManifold(cylinders){
  if(state.pipesVisible === false) return;
  if(!cylinders || !cylinders.length) return;
  const mode = state.exhaustManifold || "equal_length_headers";
  const turboRoute = mode === "turbo_manifold" || (isTurboType && isTurboType());
  const style = {
    compact_cast:{runnerW:10.5, neckW:18, outlet:92, loop:0, bend:16, collectorShift:-18, hot:false},
    equal_length_headers:{runnerW:8.2, neckW:20, outlet:154, loop:34, bend:38, collectorShift:0, hot:true},
    shorty_headers:{runnerW:8.8, neckW:19, outlet:118, loop:10, bend:22, collectorShift:-10, hot:true},
    turbo_manifold:{runnerW:9.4, neckW:21, outlet:76, loop:4, bend:12, collectorShift:18, hot:true},
    race_merged_collector:{runnerW:8.0, neckW:25, outlet:194, loop:24, bend:48, collectorShift:8, hot:true}
  }[mode] || {runnerW:8.2, neckW:20, outlet:154, loop:28, bend:34, collectorShift:0, hot:true};
  const intakePorts = cylinders.map(c => rotatedPoint(c.x, c.baseY, c.angle, -33, -114));
  const exhaustPorts = cylinders.map(c => rotatedPoint(c.x, c.baseY, c.angle, 36, -116));
  const xs = [...intakePorts, ...exhaustPorts].map(p => p.x);
  const minX = Math.min(...xs) - 78;
  const maxX = Math.max(...xs) + 78;
  const intakeY = -205 + (state.intakePipeOffset || 0);
  const exhaustY = 165 + (state.exhaustPipeOffset || 0);

  const intakeCollector = {x:maxX - 44 + style.collectorShift * .35, y:intakeY + 6};
  const intakeOutlet = {x:maxX + 118 + style.outlet * .22, y:intakeY - 12};

  intakePorts.forEach((port, i) => {
    const spread = (i - (intakePorts.length - 1) / 2) * 5;
    const target = {x:intakeCollector.x - 34, y:intakeCollector.y};
    drawChromeBezier(
      port,
      {x:port.x - 24, y:port.y - 34 - (i % 2) * 7},
      {x:intakeCollector.x - 70 - style.bend - (i % 2) * 12, y:intakeY + 28 + style.bend * .28 + spread * .16},
      target,
      Math.max(7, style.runnerW * .82),
      false
    );
  });
  drawChromeMergeNeck(
    intakeCollector,
    intakeOutlet,
    18,
    false
  );

  const exhaustCollector = {x:maxX - 34 + style.collectorShift, y:exhaustY - 2};
  const exhaustTo = {x:maxX + style.outlet + (turboRoute ? 38 : 0), y:exhaustY + (mode === "compact_cast" ? 4 : 14)};

  exhaustPorts.forEach((port, i) => {
    const spread = (i - (exhaustPorts.length - 1) / 2) * 5.5;
    const target = {x:exhaustCollector.x - 38, y:exhaustCollector.y};
    const loop = style.loop + (mode === "equal_length_headers" ? (i % 3) * 10 : mode === "race_merged_collector" ? (i % 2) * 8 : 0);
    drawChromeBezier(
      port,
      {x:port.x + 24 + loop * .25, y:port.y + 24 + loop},
      {x:exhaustCollector.x - 72 - style.bend - (i % 2) * 14, y:exhaustY - 34 - loop * .35 + spread * .12},
      target,
      style.runnerW,
      style.hot
    );
  });
  drawChromeMergeNeck(
    exhaustCollector,
    exhaustTo,
    style.neckW,
    style.hot
  );

  if(turboRoute){
    ctx.fillStyle = "#1f2937";
    ctx.strokeStyle = "#cbd5e1";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(exhaustCollector.x + 38, exhaustCollector.y, 24, 0, Math.PI*2);
    ctx.fill();
    ctx.stroke();
  }
  drawExhaustOutletAir(exhaustTo.x + 10, exhaustTo.y, 1);
}

function drawRadialExternalManifold(radialPorts){
  if(state.pipesVisible === false || !radialPorts || !radialPorts.length) return;
  const mode = state.exhaustManifold || "equal_length_headers";
  const style = {
    compact_cast:{intakeW:6.4, exhaustW:7.8, neckW:19, outlet:112, intakeR:230, exhaustR:248, hot:false},
    equal_length_headers:{intakeW:5.8, exhaustW:7.2, neckW:21, outlet:154, intakeR:238, exhaustR:258, hot:true},
    shorty_headers:{intakeW:6.0, exhaustW:7.6, neckW:20, outlet:128, intakeR:228, exhaustR:246, hot:true},
    turbo_manifold:{intakeW:6.3, exhaustW:8.0, neckW:22, outlet:104, intakeR:226, exhaustR:244, hot:true},
    race_merged_collector:{intakeW:5.8, exhaustW:7.0, neckW:25, outlet:184, intakeR:246, exhaustR:268, hot:true}
  }[mode] || {intakeW:5.8, exhaustW:7.2, neckW:21, outlet:154, intakeR:238, exhaustR:258, hot:true};
  const intakeY = -288 + (state.intakePipeOffset || 0);
  const exhaustY = 292 + (state.exhaustPipeOffset || 0);
  const intakeCollector = {x:226, y:intakeY + 5};
  const exhaustCollector = {x:226, y:exhaustY - 3};
  const intakeOutlet = {x:intakeCollector.x + style.outlet, y:intakeY - 12};
  const exhaustOutlet = {x:exhaustCollector.x + style.outlet + 18, y:exhaustY + 15};

  function drawChromeRing(radius, width, hot, topBias){
    const grad = chromePipeGradient(-radius, -radius, radius, radius, hot);
    ctx.save();
    ctx.strokeStyle = grad;
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = "rgba(255,255,255,.48)";
    ctx.lineWidth = Math.max(1.3, width * .18);
    ctx.beginPath();
    ctx.arc(0, topBias ? -width * .2 : width * .2, radius - width * .18, Math.PI * 1.08, Math.PI * 1.92);
    ctx.stroke();
    ctx.restore();
  }

  function drawRadialStub(port, radius, width, hot){
    const a = Math.atan2(port.y, port.x);
    const radial = {x:Math.cos(a), y:Math.sin(a)};
    const ringPoint = {x:radial.x * radius, y:radial.y * radius};
    drawChromeBezier(
      port,
      {x:port.x + radial.x * 16, y:port.y + radial.y * 16},
      {x:ringPoint.x - radial.x * 10, y:ringPoint.y - radial.y * 10},
      ringPoint,
      width,
      hot
    );
  }

  radialPorts.forEach(p => drawRadialStub(p.intake, style.intakeR, style.intakeW, false));
  radialPorts.forEach(p => drawRadialStub(p.exhaust, style.exhaustR, style.exhaustW, style.hot));

  drawChromeRing(style.intakeR, style.intakeW + 1.6, false, true);
  drawChromeRing(style.exhaustR, style.exhaustW + 1.8, style.hot, false);

  const intakeRingExit = {x:style.intakeR * .70, y:-style.intakeR * .72};
  drawChromeBezier(
    intakeRingExit,
    {x:intakeRingExit.x + 42, y:intakeRingExit.y - 28},
    {x:intakeCollector.x - 74, y:intakeCollector.y + 2},
    {x:intakeCollector.x - 34, y:intakeCollector.y},
    11,
    false
  );
  drawChromeMergeNeck(intakeCollector, intakeOutlet, 18, false);

  const exhaustRingExit = {x:style.exhaustR * .70, y:style.exhaustR * .72};
  drawChromeBezier(
    exhaustRingExit,
    {x:exhaustRingExit.x + 42, y:exhaustRingExit.y + 30},
    {x:exhaustCollector.x - 76, y:exhaustCollector.y - 2},
    {x:exhaustCollector.x - 36, y:exhaustCollector.y},
    style.neckW * .58,
    style.hot
  );
  drawChromeMergeNeck(exhaustCollector, exhaustOutlet, style.neckW, style.hot);
  drawExhaustOutletAir(exhaustOutlet.x + 10, exhaustOutlet.y, 1);
}

function drawDetailedRadialCylinder(a, phase, fireActive){
  const axisX = Math.cos(a), axisY = Math.sin(a);
  const pistonTravel = (Math.cos(phase) * .5 + .5) * 52;
  const pistonR = 86 + pistonTravel;
  const pistonCx = axisX * pistonR;
  const pistonCy = axisY * pistonR;
  const crankPinX = Math.sin(phase) * 22;
  const crankPinY = Math.cos(phase) * 22;

  // crank throw and articulated conrod, matching the detailed piston-bank style
  ctx.strokeStyle = "#94a3b8";
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(crankPinX, crankPinY);
  ctx.stroke();
  ctx.strokeStyle = "#64748b";
  ctx.lineWidth = 2.2;
  ctx.beginPath();
  ctx.moveTo(-axisY * 4, axisX * 4);
  ctx.lineTo(crankPinX - axisY * 4, crankPinY + axisX * 4);
  ctx.moveTo(axisY * 4, -axisX * 4);
  ctx.lineTo(crankPinX + axisY * 4, crankPinY - axisX * 4);
  ctx.stroke();

  ctx.strokeStyle = "#cbd5e1";
  ctx.lineWidth = 5.2;
  ctx.beginPath();
  ctx.moveTo(pistonCx, pistonCy);
  ctx.lineTo(crankPinX, crankPinY);
  ctx.stroke();
  ctx.strokeStyle = "#8fa3bb";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(pistonCx - axisY * 4, pistonCy + axisX * 4);
  ctx.lineTo(crankPinX - axisY * 4, crankPinY + axisX * 4);
  ctx.moveTo(pistonCx + axisY * 4, pistonCy - axisX * 4);
  ctx.lineTo(crankPinX + axisY * 4, crankPinY - axisX * 4);
  ctx.stroke();

  ctx.fillStyle = "#e2e8f0";
  ctx.beginPath(); ctx.arc(crankPinX, crankPinY, 8.2, 0, Math.PI*2); ctx.fill();
  ctx.fillStyle = "#64748b";
  ctx.beginPath(); ctx.arc(crankPinX, crankPinY, 3.4, 0, Math.PI*2); ctx.fill();

  ctx.save();
  ctx.rotate(a + Math.PI / 2);
  ctx.translate(0, -132);

  ctx.fillStyle = "#1f2a38";
  ctx.strokeStyle = "#5e7188";
  ctx.lineWidth = 2.2;
  roundRect(-23,-58,46,116,9,true,true);
  ctx.fillStyle = "#111821";
  ctx.strokeStyle = "#3f5268";
  roundRect(-15,-50,30,96,7,true,true);
  ctx.fillStyle = "#314050";
  ctx.strokeStyle = "#90a3b7";
  roundRect(-25,-76,50,19,7,true,true);
  ctx.fillStyle = "#263646";
  roundRect(-21,-62,42,12,5,true,true);

  const intakeLift = Math.max(0, Math.sin(phase + Math.PI * .15)) * 6.4;
  const exhaustLift = Math.max(0, Math.sin(phase + Math.PI * 1.05)) * 5.6;
  [{x:-10,lift:intakeLift,color:"#dbeafe",seat:"#93c5fd"},{x:10,lift:exhaustLift,color:"#fee2e2",seat:"#fca5a5"}].forEach(v => {
    ctx.strokeStyle = v.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(v.x,-60);
    ctx.lineTo(v.x,-39 + v.lift);
    ctx.stroke();
    ctx.fillStyle = v.seat;
    ctx.beginPath();
    ctx.ellipse(v.x,-36 + v.lift,5.4,2.8,0,0,Math.PI*2);
    ctx.fill();
    ctx.strokeStyle = "#e5eef8";
    ctx.lineWidth = .8;
    ctx.stroke();
  });

  if(fireActive){
    ctx.fillStyle = state.fuel < .9 ? "#60a5fa" : state.fuel > 1.1 ? "#fb923c" : "#facc15";
    ctx.globalAlpha = .9;
    ctx.beginPath();
    ctx.ellipse(0,-43,12 + Math.random()*4,10 + Math.random()*3,0,0,Math.PI*2);
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  const localPistonY = 132 - pistonR;
  ctx.save();
  ctx.translate(0, localPistonY);
  ctx.fillStyle = "#d9e1eb";
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 1.3;
  ctx.beginPath();
  ctx.moveTo(-22,11);
  ctx.lineTo(-22,-6);
  ctx.quadraticCurveTo(-10,-16,0,-18);
  ctx.quadraticCurveTo(10,-16,22,-6);
  ctx.lineTo(22,11);
  ctx.quadraticCurveTo(0,16,-22,11);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.strokeStyle = "#8ea0b5";
  ctx.lineWidth = 1;
  for(const yy of [-10,-6,-2]){ ctx.beginPath(); ctx.moveTo(-18,yy); ctx.lineTo(18,yy); ctx.stroke(); }
  ctx.fillStyle = "#9fb0c2";
  ctx.beginPath(); ctx.ellipse(0,2,9,4,0,0,Math.PI*2); ctx.fill();
  ctx.restore();

  ctx.restore();

  ctx.fillStyle = "#e2e8f0";
  ctx.beginPath(); ctx.arc(pistonCx, pistonCy, 5.4, 0, Math.PI*2); ctx.fill();
}

function drawPistonBanks(cx, cy, scale){
  const type = state.type;
  const cyl = state.units;
  const layout = getConfig().layout || type;
  const banks = layout === "inline" ? 1 : layout === "w" ? 4 : layout === "radial" ? 0 : layout === "h" ? 4 : layout === "u" ? 2 : layout === "x" ? 4 : layout === "opposed" ? 2 : 2;
  const perBank = banks ? Math.ceil(cyl / banks) : cyl;
  const bankAngle = layout === "v" ? (state.extra1 || 60) : layout === "w" ? 52 : layout === "flat" ? 90 : layout === "vr" ? (state.extra1 || 15) : layout === "h" ? 90 : layout === "x" ? 45 : layout === "opposed" ? 180 : 0;
  const fireOffsets = Array.from({length:cyl}, (_,i)=> i * Math.PI * 2 / cyl);

  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(scale, scale);

  if(layout === "radial"){
    ctx.fillStyle = "#111821";
    ctx.strokeStyle = "#344255";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(0,0,180,0,Math.PI*2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#e2e8f0";
    ctx.beginPath(); ctx.arc(0,0,14,0,Math.PI*2); ctx.fill();
    ctx.fillStyle = "#64748b";
    ctx.beginPath(); ctx.arc(0,0,6,0,Math.PI*2); ctx.fill();

    const radialPorts = [];
    for(let n=0;n<cyl;n++){
      const a = n * Math.PI * 2 / cyl;
      const phase = state.crank + fireOffsets[n];
      const fireActive = Math.cos(phase) > .965 && state.on && getThrottle() > .08;
      drawDetailedRadialCylinder(a, phase, fireActive);
      radialPorts.push({
        intake:{x:Math.cos(a) * 168, y:Math.sin(a) * 168},
        exhaust:{x:Math.cos(a) * 188, y:Math.sin(a) * 188}
      });
    }

    drawRadialExternalManifold(radialPorts);

    ctx.fillStyle = "#93c5fd";
    ctx.font = "bold 18px system-ui";
    ctx.fillText("RADIAL", -36, 210);
    ctx.restore();
    return;
  }

  ctx.fillStyle = "#111821";
  ctx.strokeStyle = "#344255";
  ctx.lineWidth = 3;
  roundRect(-260,-110,520,220,28,true,true);

  // main crankshaft
  ctx.strokeStyle = "#d7dee9";
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-220,80);
  ctx.lineTo(220,80);
  ctx.stroke();
  ctx.strokeStyle = "#8899ab";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(-220,92);
  ctx.lineTo(220,92);
  ctx.stroke();

  // crank throws / main journals for a more realistic lower-end view
  const journalCount = Math.max(2, Math.min(8, Math.ceil(cyl / 2)));
  for(let j=0;j<journalCount;j++){
    const jx = -180 + (journalCount === 1 ? 0 : j * (360 / (journalCount - 1)));
    const a = state.crank * (j % 2 === 0 ? 1 : -1) + j * .4;
    ctx.strokeStyle = "#cdd7e4";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(jx,80);
    ctx.lineTo(jx + Math.sin(a) * 13, 80 + Math.cos(a) * 13);
    ctx.stroke();
    ctx.fillStyle = "#d9e1eb";
    ctx.beginPath();
    ctx.arc(jx,80,7,0,Math.PI*2);
    ctx.fill();
    ctx.fillStyle = "#64748b";
    ctx.beginPath();
    ctx.arc(jx,80,3,0,Math.PI*2);
    ctx.fill();
  }

  let drawn = 0;
  const allCylinders = [];
  for(let b=0;b<banks;b++){
    const side = banks === 1 ? 0 : (b % 2 === 0 ? -1 : 1);
    const tier = type === "w" ? (b < 2 ? -1 : 1) : 0;
    const angle = type === "inline" ? 0 : side * bankAngle * Math.PI/180 + tier * .18;
    const baseY = -20 + tier * 10;

    for(let i=0;i<perBank && drawn<cyl;i++,drawn++){
      const x = (i - (perBank - 1)/2) * (banks===1 ? 70 : 58) + (banks===4 ? side * 34 : 0);
      const phase = state.crank + fireOffsets[drawn];
      const fireActive = Math.cos(phase) > .965 && state.on && getThrottle() > .08;
      allCylinders.push({x, baseY, angle, phase});

      if(state.ecoMode){
        const piston = (Math.cos(phase) * .5 + .5) * 54;
        const px = x + Math.sin(angle) * piston;
        const py = baseY - Math.cos(angle) * piston;

        ctx.save();
        ctx.translate(x, baseY);
        ctx.rotate(angle);
        ctx.fillStyle = "#1f2a38";
        ctx.strokeStyle = "#5e7188";
        roundRect(-22,-108,44,116,8,true,true);
        if(fireActive){
          ctx.fillStyle = state.fuel < .9 ? "#60a5fa" : state.fuel > 1.1 ? "#fb923c" : "#facc15";
          ctx.globalAlpha = .9;
          ctx.beginPath();
          ctx.arc(0,-92,17 + Math.random()*7,0,Math.PI*2);
          ctx.fill();
          ctx.globalAlpha = 1;
        }
        ctx.restore();

        ctx.strokeStyle = "#cbd5e1";
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(px,py);
        ctx.lineTo(x,80);
        ctx.stroke();

        ctx.fillStyle = "#d9e1eb";
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 1.5;
        ctx.save();
        ctx.translate(px,py);
        ctx.rotate(angle);
        roundRect(-25,-14,50,28,6,true,true);
        ctx.restore();
      } else {
        drawDetailedCylinder(x, baseY, angle, phase, fireActive);
      }
    }
  }
  if(!state.ecoMode) drawSharedEngineManifold(allCylinders);
  drawHybridMotorOnShaft();
  drawTurboHardware();
  ctx.restore();
}


function drawRotaryPipes(rotors, spacing){
  if(state.pipesVisible === false) return;
  const count = Math.max(1, Math.round(rotors || 1));
  const rotorXs = Array.from({length:count}, (_, i) => (i - (count - 1) / 2) * spacing);
  const maxX = Math.max(...rotorXs) + 112;
  const intakeY = -178 + (state.intakePipeOffset || 0);
  const exhaustY = 176 + (state.exhaustPipeOffset || 0);
  const intakeCollector = {x:maxX - 18, y:intakeY + 10};
  const exhaustCollector = {x:maxX - 12, y:exhaustY - 8};
  const intakeOutlet = {x:maxX + 128, y:intakeY - 8};
  const exhaustOutlet = {x:maxX + 142, y:exhaustY + 12};

  rotorXs.forEach((x, i) => {
    const spread = (i - (count - 1) / 2) * 5;
    drawChromeBezier(
      {x:x - 46, y:-92},
      {x:x - 58, y:intakeY + 28 + spread},
      {x:intakeCollector.x - 78, y:intakeCollector.y + spread * .35},
      {x:intakeCollector.x - 34, y:intakeCollector.y},
      6.5,
      false
    );
    drawChromeBezier(
      {x:x + 58, y:82},
      {x:x + 70, y:exhaustY - 36 - spread},
      {x:exhaustCollector.x - 82, y:exhaustCollector.y - spread * .35},
      {x:exhaustCollector.x - 36, y:exhaustCollector.y},
      8,
      true
    );
  });

  drawChromeMergeNeck(intakeCollector, intakeOutlet, 18, false);
  drawChromeMergeNeck(exhaustCollector, exhaustOutlet, 21, true);
  ctx.fillStyle = "#bfdbfe";
  ctx.font = "bold 10px system-ui";
  ctx.fillText("ROTARY INTAKE", intakeCollector.x - 120, intakeY - 12);
  ctx.fillStyle = "#fed7aa";
  ctx.fillText("ROTARY EXHAUST", exhaustCollector.x - 126, exhaustY + 34);
  drawExhaustOutletAir(exhaustOutlet.x + 10, exhaustOutlet.y, 1);
}

function drawRotaryHousing(){
  ctx.save();
  const bodyGrad = ctx.createLinearGradient(-130, -168, 130, 168);
  bodyGrad.addColorStop(0, "#263444");
  bodyGrad.addColorStop(.48, "#111827");
  bodyGrad.addColorStop(1, "#334155");
  ctx.fillStyle = bodyGrad;
  ctx.strokeStyle = "#5e7188";
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.ellipse(0, 0, 128, 172, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.strokeStyle = "rgba(255,255,255,.32)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(0, 0, 106, 148, 0, 0, Math.PI * 2);
  ctx.stroke();

  ctx.strokeStyle = "rgba(15,23,42,.72)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(0, 0, 118, 160, 0, 0, Math.PI * 2);
  ctx.stroke();

  ctx.restore();
}

function drawReuleauxRotor(angle){
  const orbit = angle * 3;
  const eccentricX = Math.cos(orbit) * 18;
  const eccentricY = Math.sin(orbit) * 26;
  const apexR = 98;
  const sideBulge = 126;
  const points = [];
  for(let n=0;n<3;n++){
    const a = angle + n * Math.PI * 2 / 3 - Math.PI / 2;
    points.push({x:Math.cos(a) * apexR, y:Math.sin(a) * apexR, a});
  }

  ctx.save();
  ctx.translate(eccentricX, eccentricY);
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for(let n=0;n<3;n++){
    const p = points[n];
    const q = points[(n + 1) % 3];
    const midA = Math.atan2(p.y + q.y, p.x + q.x);
    const c = {x:Math.cos(midA) * sideBulge, y:Math.sin(midA) * sideBulge};
    ctx.quadraticCurveTo(c.x, c.y, q.x, q.y);
  }
  ctx.closePath();
  ctx.fillStyle = "#a8a19a";
  ctx.strokeStyle = "#f2f2f2";
  ctx.lineWidth = 3;
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "rgba(15,23,42,.62)";
  ctx.strokeStyle = "#d8bf7a";
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(0, 0, 38, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.strokeStyle = "rgba(40,40,44,.62)";
  ctx.lineWidth = 2;
  for(let n=0;n<3;n++){
    const p = points[n];
    ctx.beginPath();
    ctx.moveTo(p.x * .22, p.y * .22);
    ctx.lineTo(p.x * .88, p.y * .88);
    ctx.stroke();

    ctx.fillStyle = "#e8e6e3";
    ctx.strokeStyle = "#1f2937";
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.arc(p.x * .98, p.y * .98, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  drawToothedGear(0, 0, 32, 28, -angle * 1.9, "#7f7a75", "#e5e7eb", "", false);
  ctx.restore();

  ctx.save();
  ctx.strokeStyle = "rgba(216,191,122,.72)";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(eccentricX, eccentricY);
  ctx.stroke();

  drawToothedGear(0, 0, 42, 34, -orbit * .62, "#2f343b", "#e5e7eb", "", false);
  drawToothedGear(0, 0, 24, 22, orbit * .86, "#111827", "#cbd5e1", "", false);

  const shaftGrad = ctx.createLinearGradient(-12, -14, 74, 14);
  shaftGrad.addColorStop(0, "#2b3037");
  shaftGrad.addColorStop(.35, "#7d858f");
  shaftGrad.addColorStop(.62, "#d8dee6");
  shaftGrad.addColorStop(1, "#242a32");
  ctx.strokeStyle = shaftGrad;
  ctx.lineWidth = 24;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(-10, 0);
  ctx.lineTo(70, 0);
  ctx.stroke();
  ctx.strokeStyle = "rgba(255,255,255,.48)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(-4, -7);
  ctx.lineTo(60, -7);
  ctx.stroke();

  ctx.fillStyle = "#1f2937";
  ctx.strokeStyle = "#f8fafc";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(0, 0, 13, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#05070a";
  ctx.beginPath();
  ctx.arc(0, 0, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawRotaryCenterShaft(rotorXs, spacing){
  const minX = Math.min(...rotorXs) - 18;
  const maxX = Math.max(...rotorXs) + Math.max(238, spacing * .45 + 220);
  const grad = ctx.createLinearGradient(minX, -18, maxX, 18);
  grad.addColorStop(0, "#2b3037");
  grad.addColorStop(.35, "#aeb7c2");
  grad.addColorStop(.55, "#f8fafc");
  grad.addColorStop(.78, "#5d6672");
  grad.addColorStop(1, "#1f2937");
  ctx.save();
  ctx.strokeStyle = grad;
  ctx.lineWidth = 24;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(minX, 0);
  ctx.lineTo(maxX, 0);
  ctx.stroke();
  ctx.strokeStyle = "rgba(255,255,255,.55)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(minX + 10, -7);
  ctx.lineTo(maxX - 8, -7);
  ctx.stroke();
  rotorXs.forEach(x => {
    ctx.strokeStyle = "#d8bf7a";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(x, 0, 50, 0, Math.PI * 2);
    ctx.stroke();
  });
  ctx.restore();
}

function drawRotary(cx, cy, scale){
  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(scale, scale);

  ctx.fillStyle = "#111821";
  ctx.strokeStyle = "#344255";
  ctx.lineWidth = 4;
  roundRect(-250,-135,500,270,32,true,true);

  if(state.type === "quasiturbine"){
    drawRotaryPipes(1, 0);
    drawRotaryCenterShaft([0], 0);
    ctx.save();
    ctx.translate(0,0);
    ctx.strokeStyle = "#b99a55";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(0,-84);
    ctx.quadraticCurveTo(84,-84,84,0);
    ctx.quadraticCurveTo(84,84,0,84);
    ctx.quadraticCurveTo(-84,84,-84,0);
    ctx.quadraticCurveTo(-84,-84,0,-84);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "#1f2a38";
    ctx.fill();

    ctx.rotate(state.crank * 1.2);
    ctx.fillStyle = "#d9e1eb";
    ctx.beginPath();
    ctx.moveTo(0,-62);
    ctx.lineTo(56,0);
    ctx.lineTo(0,62);
    ctx.lineTo(-56,0);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "#ffffff";
    ctx.stroke();

    ctx.strokeStyle = "#93c5fd";
    ctx.beginPath();
    ctx.moveTo(-56,0); ctx.lineTo(56,0);
    ctx.moveTo(0,-62); ctx.lineTo(0,62);
    ctx.stroke();
    ctx.restore();

    ctx.fillStyle = "#93c5fd";
    ctx.font = "bold 18px system-ui";
    ctx.fillText("QUASITURBINE", -72, 145);
    ctx.restore();
    return;
  }

  const rotors = state.units;
  const spacing = rotors === 1 ? 0 : rotors === 2 ? 110 : rotors === 3 ? 80 : 62;
  const rotorXs = Array.from({length:rotors}, (_, i) => (i - (rotors - 1) / 2) * spacing);
  drawRotaryPipes(rotors, spacing);
  drawRotaryCenterShaft(rotorXs, spacing);
  for(let i=0;i<rotors;i++){
    const ox = rotorXs[i];
    ctx.save();
    ctx.translate(ox,0);
    drawRotaryHousing();
    drawReuleauxRotor(state.crank * 1.35 + i * .22);

    if(state.on && getThrottle() > .08){
      ctx.fillStyle = "#facc15";
      ctx.globalAlpha = .7;
      ctx.beginPath();
      ctx.arc(72,-10,18 + Math.random()*8,0,Math.PI*2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
    ctx.restore();
  }

  ctx.fillStyle = "#93c5fd";
  ctx.font = "bold 18px system-ui";
  ctx.fillText(rotors > 1 ? `${rotors} ROTORS` : "SINGLE ROTOR", -70, 145);
  ctx.restore();
}



function drawElectric(cx, cy, scale){
  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(scale, scale);

  if(isFuelCellActive()){
    ctx.fillStyle = "#111821";
    ctx.strokeStyle = "#344255";
    ctx.lineWidth = 4;
    roundRect(-280,-140,560,280,34,true,true);

    // Hydrogen tanks (toggleable)
    if(state.fuelTanks){
      for(let i=0;i<2;i++){
        const y = -78 + i*62;
        ctx.fillStyle = "#17212d";
        ctx.strokeStyle = "#60a5fa";
        roundRect(-250,y,150,38,19,true,true);
        ctx.fillStyle = "#bfdbfe";
        ctx.font = "bold 11px system-ui";
        ctx.fillText("H₂ TANK " + Math.round(state.extra2 || 700) + " bar", -234, y+24);
      }
      ctx.strokeStyle="#60a5fa"; ctx.lineWidth=4; ctx.beginPath(); ctx.moveTo(-100,-58); ctx.lineTo(-56,-58); ctx.moveTo(-100,-16); ctx.lineTo(-56,-16); ctx.stroke();
    } else {
      ctx.fillStyle = "#64748b"; ctx.font = "bold 11px system-ui"; ctx.fillText("TANKS HIDDEN", -242, -62);
    }

    // Fuel-cell stack plates
    ctx.fillStyle = "#0f2433";
    ctx.strokeStyle = "#93c5fd";
    roundRect(-56,-98,112,196,18,true,true);
    for(let x=-42;x<=42;x+=14){
      ctx.strokeStyle = x % 28 === 0 ? "#bfdbfe" : "#60a5fa";
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(x,-82); ctx.lineTo(x,82); ctx.stroke();
    }
    const pulse = state.on ? (Math.sin(state.crank*2)*.5+.5) : .15;
    ctx.fillStyle = "rgba(96,165,250," + (.12 + pulse*.22).toFixed(3) + ")";
    roundRect(-50,-92,100,184,16,true,false);

    // Compressor / humidifier / coolant pump
    ctx.strokeStyle = "#cbd5e1";
    ctx.lineWidth = 5;
    ctx.beginPath(); ctx.moveTo(-98,-58); ctx.lineTo(-56,-58); ctx.moveTo(56,-40); ctx.lineTo(112,-40); ctx.stroke();
    ctx.fillStyle = "#1f2937"; ctx.strokeStyle = "#dbeafe";
    ctx.beginPath(); ctx.arc(126,-40,32,0,Math.PI*2); ctx.fill(); ctx.stroke();
    ctx.save(); ctx.translate(126,-40); ctx.rotate(state.crank*2.8);
    ctx.strokeStyle="#93c5fd"; ctx.lineWidth=4;
    for(let i=0;i<7;i++){ ctx.rotate(Math.PI*2/7); ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(22,0); ctx.stroke(); }
    ctx.restore();
    ctx.fillStyle="#bfdbfe"; ctx.font="bold 11px system-ui"; ctx.fillText("AIR COMP", 100, 10);

    // Battery buffer and traction motor connected to driveshaft
    ctx.fillStyle = "#182a22"; ctx.strokeStyle = "#86efac"; roundRect(92,38,75,60,14,true,true);
    ctx.fillStyle = "#bbf7d0"; ctx.font = "bold 11px system-ui"; ctx.fillText("BUFFER", 104,73);
    ctx.strokeStyle = "#dbeafe"; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(166,68); ctx.lineTo(210,68); ctx.stroke();
    ctx.fillStyle = "#13283a"; ctx.strokeStyle = "#93c5fd"; roundRect(210,22,92,92,24,true,true);
    ctx.save(); ctx.translate(256,68); ctx.rotate(state.crank*2.5);
    ctx.strokeStyle = "#dbeafe"; ctx.lineWidth = 6;
    for(let i=0;i<6;i++){ ctx.rotate(Math.PI/3); ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(30,0); ctx.stroke(); }
    ctx.restore();
    ctx.fillStyle = "#bfdbfe"; ctx.font = "bold 11px system-ui"; ctx.fillText("DRIVE MOTOR", 220,133);

    // Animated water exhaust
    if(state.on && getThrottle() > .05){
      ctx.fillStyle = "rgba(191,219,254,.75)";
      for(let i=0;i<5;i++){
        const dx = 306 + ((state.crank*22 + i*17) % 68);
        const dy = -4 + Math.sin(state.crank+i)*10;
        ctx.beginPath(); ctx.arc(dx,dy,3+i%2,0,Math.PI*2); ctx.fill();
      }
      ctx.fillStyle="#bfdbfe"; ctx.font="bold 11px system-ui"; ctx.fillText("H₂O", 332,28);
    }

    ctx.fillStyle = "#93c5fd";
    ctx.font = "bold 18px system-ui";
    ctx.fillText("HYDROGEN FUEL CELL SYSTEM", -130, 156);
    ctx.restore();
    return;
  }

  ctx.fillStyle = "#111821";
  ctx.strokeStyle = "#344255";
  ctx.lineWidth = 4;
  roundRect(-260,-130,520,260,34,true,true);

  const motors = state.units;
  const spacing = motors === 1 ? 0 : motors === 2 ? 140 : motors === 3 ? 110 : 90;

  for(let i=0;i<motors;i++){
    const ox = (i - (motors - 1)/2) * spacing;
    ctx.save();
    ctx.translate(ox,0);

    if(state.type === "hub_motor"){
      ctx.strokeStyle = "#d9e1eb"; ctx.lineWidth = 12; ctx.beginPath(); ctx.arc(0,0,62,0,Math.PI*2); ctx.stroke();
      ctx.strokeStyle = "#60a5fa"; ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(0,0,36,0,Math.PI*2); ctx.stroke();
      ctx.save(); ctx.rotate(state.crank * 1.8 + i*.2);
      for(let s=0;s<8;s++){ ctx.rotate(Math.PI/4); ctx.strokeStyle = "#e0f2fe"; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(30,0); ctx.stroke(); }
      ctx.restore();
    } else if(state.type === "axial_flux"){
      ctx.fillStyle = "#17212d"; ctx.strokeStyle = "#60a5fa"; roundRect(-58,-74,116,148,24,true,true);
      ctx.strokeStyle = "#d9e1eb"; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(0,0,42,0,Math.PI*2); ctx.stroke(); ctx.beginPath(); ctx.arc(0,0,18,0,Math.PI*2); ctx.stroke();
      ctx.save(); ctx.rotate(state.crank * 2.4 + i*.3);
      for(let b=0;b<10;b++){ ctx.rotate(Math.PI*2/10); ctx.fillStyle = b%2 ? "#60a5fa" : "#d9e1eb"; ctx.fillRect(20,-6,16,12); }
      ctx.restore();
    } else if(state.type === "brushed_dc"){
      ctx.fillStyle = "#17212d"; ctx.strokeStyle = "#60a5fa"; roundRect(-56,-84,112,168,28,true,true);
      ctx.fillStyle = "#d9e1eb"; ctx.fillRect(-10,70,20,30); ctx.fillStyle = "#b99a55"; ctx.fillRect(-18,18,8,34); ctx.fillRect(10,18,8,34);
      ctx.save(); ctx.rotate(state.crank * 2.0); ctx.strokeStyle = "#e0f2fe"; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(-34,0); ctx.lineTo(34,0); ctx.moveTo(0,-34); ctx.lineTo(0,34); ctx.stroke(); ctx.restore();
    } else if(state.type === "switched_reluctance"){
      ctx.fillStyle = "#17212d"; ctx.strokeStyle = "#60a5fa"; roundRect(-60,-80,120,160,24,true,true);
      ctx.strokeStyle = "#e0f2fe"; for(let a=0;a<8;a++){ ctx.save(); ctx.rotate(a*Math.PI/4); ctx.strokeRect(24,-8,18,16); ctx.restore(); }
      ctx.save(); ctx.rotate(state.crank * 1.9 + i*.2); ctx.fillStyle = "#d9e1eb"; for(let a=0;a<4;a++){ ctx.rotate(Math.PI/2); ctx.fillRect(16,-10,24,20); } ctx.restore();
    } else if(state.type === "ac_induction"){
      ctx.fillStyle = "#17212d"; ctx.strokeStyle = "#60a5fa"; roundRect(-58,-82,116,164,26,true,true);
      ctx.strokeStyle = "#e0f2fe"; ctx.lineWidth = 3; for(let s=-36;s<=36;s+=12){ ctx.beginPath(); ctx.moveTo(s,-46); ctx.lineTo(s,46); ctx.stroke(); }
      ctx.save(); ctx.rotate(state.crank * 2.1 + i*.15); ctx.strokeStyle = "#d9e1eb"; ctx.lineWidth = 6; ctx.beginPath(); ctx.arc(0,0,36,0,Math.PI*2); ctx.stroke(); for(let b=0;b<6;b++){ ctx.rotate(Math.PI/3); ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(28,0); ctx.stroke(); } ctx.restore();
    } else {
      ctx.fillStyle = "#17212d"; ctx.strokeStyle = "#60a5fa"; roundRect(-68,-90,136,180,28,true,true);
      ctx.strokeStyle = "#93c5fd"; ctx.lineWidth = 4; for(let r=26;r<62;r+=12){ ctx.beginPath(); ctx.arc(0,0,r,0,Math.PI*2); ctx.stroke(); }
      ctx.save(); ctx.rotate(state.crank * 2.2 + i * .3); const blades = state.type === "bldc" ? 6 : 4; ctx.strokeStyle = "#e0f2fe"; ctx.lineWidth = 10; for(let b=0;b<blades;b++){ ctx.rotate(Math.PI*2/blades); ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(54,0); ctx.stroke(); } ctx.restore();
      if(state.type === "pmsm"){ for(let m=0;m<8;m++){ ctx.save(); ctx.rotate(m*Math.PI/4); ctx.fillStyle = m%2 ? "#60a5fa" : "#d9e1eb"; ctx.fillRect(48,-5,12,10); ctx.restore(); } }
    }
    ctx.restore();
  }

  ctx.fillStyle = "#93c5fd";
  ctx.font = "bold 18px system-ui";
  ctx.fillText(getConfig().label.toUpperCase(), -110, 145);
  ctx.restore();
}


function drawJet(cx, cy, scale){
  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(scale, scale);

  function rotor(x,y,r,blades=9,rate=1.7){
    ctx.save(); ctx.translate(x,y);
    ctx.strokeStyle="#60a5fa"; ctx.lineWidth=4; ctx.beginPath(); ctx.arc(0,0,r,0,Math.PI*2); ctx.stroke();
    ctx.rotate(state.crank*rate);
    ctx.fillStyle="#dbe5ef";
    for(let i=0;i<blades;i++){ ctx.rotate(Math.PI*2/blades); ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(r-8,10); ctx.lineTo(r-24,-7); ctx.closePath(); ctx.fill(); }
    ctx.restore();
  }
  function flame(x,y,len,color){
    if(state.on && getThrottle() > .06){ ctx.fillStyle=color; ctx.globalAlpha=.82; ctx.beginPath(); ctx.moveTo(x,y-18); ctx.quadraticCurveTo(x+len*.55,y-len*.34,x+len,y); ctx.quadraticCurveTo(x+len*.55,y+len*.34,x,y+18); ctx.fill(); ctx.globalAlpha=1; }
  }

  if(state.type === "rocket"){
    ctx.fillStyle="#111821"; ctx.strokeStyle="#344255"; ctx.lineWidth=4; roundRect(-140,-170,280,290,36,true,true);
    ctx.fillStyle="#1f2937"; ctx.strokeStyle="#cbd5e1"; roundRect(-92,-128,184,156,42,true,true);
    ctx.fillStyle="#17212d"; roundRect(-70,0,140,92,26,true,true);
    ctx.strokeStyle="#93c5fd"; ctx.lineWidth=5; for(let x=-42;x<=42;x+=42){ ctx.beginPath(); ctx.moveTo(x,-128); ctx.lineTo(x,78); ctx.stroke(); }
    ctx.strokeStyle="#fb923c"; ctx.lineWidth=8; ctx.beginPath(); ctx.moveTo(-78,-28); ctx.lineTo(78,-28); ctx.stroke();
    flame(-46,92,120,"#fb923c"); flame(0,92,135,"#facc15"); flame(46,92,120,"#fb923c");
    ctx.fillStyle="#93c5fd"; ctx.font="bold 18px system-ui"; ctx.fillText("ROCKET CHAMBER",-80,154); ctx.restore(); return;
  }

  if(state.type === "ramjet" || state.type === "scramjet"){
    const scram = state.type === "scramjet";
    ctx.fillStyle="#111821"; ctx.strokeStyle="#344255"; ctx.lineWidth=4;
    ctx.beginPath();
    ctx.moveTo(-285,-82); ctx.lineTo(-105,-46); ctx.lineTo(120,-40); ctx.lineTo(285,-68); ctx.lineTo(248,0); ctx.lineTo(285,68); ctx.lineTo(120,40); ctx.lineTo(-105,46); ctx.lineTo(-285,82); ctx.closePath();
    ctx.fill(); ctx.stroke();
    ctx.strokeStyle=scram?"#fb923c":"#60a5fa"; ctx.lineWidth=5;
    for(let i=0;i<(scram?4:2);i++){ const x=-205+i*70; ctx.beginPath(); ctx.moveTo(x,-58); ctx.lineTo(x+54,0); ctx.lineTo(x,58); ctx.stroke(); }
    if(state.on && getThrottle()>.06){ ctx.fillStyle=scram?"#fb923c":"#facc15"; ctx.globalAlpha=.7; ctx.beginPath(); ctx.moveTo(-18,0); ctx.quadraticCurveTo(90,-38,190,0); ctx.quadraticCurveTo(90,38,-18,0); ctx.fill(); ctx.globalAlpha=1; }
    flame(252,0,scram?115:72,scram?"#fb923c":"#facc15");
    ctx.fillStyle="#93c5fd"; ctx.font="bold 18px system-ui"; ctx.fillText(scram?"SCRAMJET SUPERSONIC COMBUSTOR":"RAMJET DUCT", scram?-142:-58, 132); ctx.restore(); return;
  }

  if(state.type === "pulsejet"){
    ctx.fillStyle="#111821"; ctx.strokeStyle="#344255"; ctx.lineWidth=4;
    ctx.beginPath(); ctx.moveTo(-260,-58); ctx.lineTo(-90,-82); ctx.lineTo(210,-46); ctx.lineTo(280,-22); ctx.lineTo(280,22); ctx.lineTo(210,46); ctx.lineTo(-90,82); ctx.lineTo(-260,58); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.strokeStyle="#cbd5e1"; ctx.lineWidth=5; for(let x=-210;x<-80;x+=24){ ctx.beginPath(); ctx.moveTo(x,-42); ctx.lineTo(x+14,42); ctx.stroke(); }
    if(state.on && getThrottle()>.06){ for(let i=0;i<4;i++) flame(210+i*10,0,60+i*12,i%2?"#fb923c":"#facc15"); }
    ctx.fillStyle="#93c5fd"; ctx.font="bold 18px system-ui"; ctx.fillText("PULSEJET VALVE GRID",-104,128); ctx.restore(); return;
  }

  if(state.type === "turboprop"){
    ctx.fillStyle = "#111821"; ctx.strokeStyle = "#344255"; ctx.lineWidth = 4; roundRect(-240,-90,480,180,90,true,true);
    ctx.save(); ctx.translate(-220,0); ctx.rotate(state.crank * .6); const blades = Math.round(state.units); ctx.fillStyle = "#dbe5ef"; for(let i=0;i<blades;i++){ ctx.rotate(Math.PI * 2 / blades); ctx.beginPath(); ctx.moveTo(-8,0); ctx.quadraticCurveTo(30,-70,8,-150); ctx.quadraticCurveTo(-20,-70,-8,0); ctx.fill(); } ctx.restore();
    for(let x=-120;x<130;x+=42) rotor(x,0,28,8,1.5+x*.002);
    ctx.fillStyle = "#93c5fd"; ctx.font = "bold 18px system-ui"; ctx.fillText("TURBOPROP GEARBOX + PROP", -112, 138); ctx.restore(); return;
  }

  if(state.type === "turboshaft"){
    ctx.fillStyle="#111821"; ctx.strokeStyle="#344255"; ctx.lineWidth=4; roundRect(-260,-90,520,180,42,true,true);
    rotor(-180,0,42,9,1.7); rotor(-70,0,34,10,2.0); rotor(42,0,36,10,2.3); rotor(150,0,44,11,2.6);
    ctx.strokeStyle="#dbeafe"; ctx.lineWidth=7; ctx.beginPath(); ctx.moveTo(185,0); ctx.lineTo(285,0); ctx.stroke();
    ctx.fillStyle="#1f2937"; ctx.strokeStyle="#93c5fd"; roundRect(252,-36,80,72,18,true,true);
    ctx.fillStyle="#93c5fd"; ctx.font="bold 18px system-ui"; ctx.fillText("TURBOSHAFT POWER OUTPUT",-126,130); ctx.restore(); return;
  }

  const geared = state.type === "geared_turbofan";
  const fanRadius = (state.type === "turbofan" || geared) ? 78 : 46;
  const nacelleHalf = (state.type === "turbofan" || geared) ? 118 : 78;
  ctx.fillStyle = "#111821"; ctx.strokeStyle = "#344255"; ctx.lineWidth = 4; roundRect(-270,-nacelleHalf,540,nacelleHalf*2,70,true,true);
  rotor(-190,0,fanRadius,geared?14:10,geared?1.1:1.7);
  if(geared){ ctx.fillStyle="#1f2937"; ctx.strokeStyle="#b99a55"; roundRect(-118,-38,58,76,16,true,true); ctx.fillStyle="#d8bf7a"; ctx.font="bold 11px system-ui"; ctx.fillText("GEAR",-108,5); }
  ctx.strokeStyle = "#5e7188"; ctx.lineWidth = 3; ctx.fillStyle = "#17212d"; roundRect(-90,-38,250,76,22,true,true);
  for(let x=-60;x<86;x+=36) rotor(x,0,20,8,2.4+x*.002);
  if(state.on && getThrottle() > .08){ ctx.fillStyle = state.type === "turbojet" && state.afterburner ? "#fb923c" : "#facc15"; ctx.globalAlpha = .82; ctx.beginPath(); ctx.moveTo(40,0); ctx.quadraticCurveTo(92,-34,130,0); ctx.quadraticCurveTo(92,34,40,0); ctx.fill(); ctx.globalAlpha = 1; }
  ctx.strokeStyle = "#344255"; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(160,-28); ctx.lineTo(240,-16); ctx.lineTo(240,16); ctx.lineTo(160,28); ctx.closePath(); ctx.stroke();
  if(state.type === "turbojet" && state.afterburner && state.on) flame(240,0,90,"#fb923c");
  ctx.fillStyle = "#93c5fd"; ctx.font = "bold 18px system-ui";
  ctx.fillText(geared ? "GEARED TURBOFAN" : state.type === "turbofan" ? "HIGH-BYPASS TURBOFAN" : "TURBOJET CORE", geared?-92:state.type === "turbofan"?-112:-72, nacelleHalf+32);
  ctx.restore();
}


function drawLinear(cx, cy, scale){
  ctx.save(); ctx.translate(cx,cy); ctx.scale(scale,scale);
  ctx.fillStyle="#111821"; ctx.strokeStyle="#344255"; ctx.lineWidth=4; roundRect(-260,-110,520,220,28,true,true);
  const modules = state.units;
  const spacing = modules===1 ? 0 : Math.min(120, 420/(modules-1));
  for(let i=0;i<modules;i++){
    const x = (i-(modules-1)/2)*spacing;
    const phase = state.crank + i*Math.PI*2/modules;
    const p = Math.sin(phase)*50;
    ctx.fillStyle="#1f2a38"; ctx.strokeStyle="#5e7188"; roundRect(x-26,-80,52,160,10,true,true);
    ctx.fillStyle="#d9e1eb"; ctx.strokeStyle="#fff"; roundRect(x-30,p-18,60,36,8,true,true);
    ctx.strokeStyle="#cbd5e1"; ctx.lineWidth=5; ctx.beginPath(); ctx.moveTo(x,p); ctx.lineTo(x,95); ctx.stroke();
  }
  ctx.fillStyle="#8b6f35"; ctx.font="bold 18px system-ui"; ctx.fillText("FREE-PISTON LINEAR", -95, 145);
  ctx.restore();
}


function drawExternal(cx, cy, scale){
  ctx.save(); ctx.translate(cx,cy); ctx.scale(scale,scale);
  ctx.fillStyle="#111821"; ctx.strokeStyle="#344255"; ctx.lineWidth=4; roundRect(-260,-120,520,240,32,true,true);
  const label = getConfig().label.toUpperCase();

  if(state.type==="stirling"){
    ctx.fillStyle="#3a1912"; roundRect(-190,-70,120,140,30,true,true);
    ctx.fillStyle="#1f2a38"; roundRect(70,-70,120,140,30,true,true);
    ctx.fillStyle="#fb923c"; ctx.beginPath(); ctx.arc(-130,0,48+Math.sin(state.crank)*8,0,Math.PI*2); ctx.fill();
    ctx.fillStyle="#60a5fa"; ctx.beginPath(); ctx.arc(130,0,40,0,Math.PI*2); ctx.fill();
    ctx.strokeStyle="#d9e1eb"; ctx.lineWidth=6; ctx.beginPath(); ctx.moveTo(-82,0); ctx.lineTo(82,0); ctx.stroke();
    ctx.beginPath(); ctx.arc(0,52,40,0,Math.PI*2); ctx.stroke();
  } else if(state.type==="steam"){
    ctx.fillStyle="#313b48"; roundRect(-220,-48,310,96,30,true,true);
    ctx.fillStyle="#d9e1eb"; const p=Math.sin(state.crank)*120; roundRect(-100+p,-34,58,68,10,true,true);
    ctx.strokeStyle="#cbd5e1"; ctx.lineWidth=6; ctx.beginPath(); ctx.moveTo(-70+p,0); ctx.lineTo(150,65); ctx.stroke();
    ctx.beginPath(); ctx.arc(165,70,54,0,Math.PI*2); ctx.stroke();
    ctx.strokeStyle="#b99a55"; ctx.beginPath(); ctx.arc(-185,-38,28,0,Math.PI*2); ctx.stroke();
  } else if(state.type==="scroll"){
    ctx.strokeStyle="#b99a55"; ctx.lineWidth=6;
    for(let off of [-30,30]){
      ctx.beginPath();
      for(let a=0;a<Math.PI*5;a+=.08){
        const r=6+a*5.2;
        const x=Math.cos(a+state.crank+off*.01)*r+off;
        const y=Math.sin(a+state.crank+off*.01)*r;
        if(a===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
      }
      ctx.stroke();
    }
  } else if(state.type==="gerotor"){
    ctx.strokeStyle="#b99a55"; ctx.lineWidth=5;
    ctx.beginPath(); ctx.arc(0,0,82,0,Math.PI*2); ctx.stroke();
    ctx.save(); ctx.rotate(state.crank*.9);
    ctx.beginPath();
    for(let i=0;i<7;i++){
      const a=i*Math.PI*2/7;
      const x=Math.cos(a)*52, y=Math.sin(a)*52;
      if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    }
    ctx.closePath(); ctx.stroke();
    ctx.restore();
  } else {
    ctx.strokeStyle="#b99a55"; ctx.lineWidth=5; ctx.beginPath();
    for(let a=0;a<Math.PI*6;a+=.1){ const r=8+a*6; ctx.lineTo(Math.cos(a+state.crank)*r, Math.sin(a+state.crank)*r); }
    ctx.stroke();
    ctx.fillStyle="#d9e1eb"; ctx.beginPath(); ctx.arc(0,0,50,0,Math.PI*2); ctx.stroke();
  }

  ctx.fillStyle="#8b6f35"; ctx.font="bold 18px system-ui"; ctx.fillText(label, -120, 150);
  ctx.restore();
}



function drawNuclearModule(){
  if(state.nuclearFission === "none") return;
  ctx.save();
  ctx.translate(0,0);
  ctx.fillStyle = "#111821";
  ctx.strokeStyle = "#d8bf7a";
  ctx.lineWidth = 4;
  roundRect(-390,-135,118,150,22,true,true);
  const glow = state.on ? .35 + .25*Math.sin(state.crank*2.1) : .16;
  ctx.fillStyle = "rgba(216,191,122,"+glow.toFixed(3)+")";
  ctx.beginPath(); ctx.arc(-331,-62,42,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle = "#fff3b0"; ctx.lineWidth = 3;
  for(let i=0;i<3;i++){ ctx.save(); ctx.translate(-331,-62); ctx.rotate(state.crank*.8+i*Math.PI*2/3); ctx.beginPath(); ctx.ellipse(0,0,45,12,0,0,Math.PI*2); ctx.stroke(); ctx.restore(); }
  ctx.strokeStyle = "#d8bf7a"; ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-272,-70); ctx.bezierCurveTo(-224,-70,-210,20,-148,76);
  ctx.lineTo(-70,80);
  ctx.stroke();
  ctx.fillStyle = "#d8bf7a"; ctx.font = "bold 11px system-ui";
  ctx.fillText(state.nuclearFission === "micro" ? "MICRO FISSION" : "RTG SUPPORT", -376, 34);
  ctx.fillText("heat/electric link → shaft", -252, 104);
  ctx.restore();
}

function drawSecondaryEngineModule(){
  if(state.secondaryEngine === "none") return;
  ctx.save();
  ctx.translate(375,-82);

  // Strong mechanical/electrical connection back to the main crank/driveshaft.
  ctx.strokeStyle = "#d8bf7a";
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(-88,46);
  ctx.bezierCurveTo(-170,70,-230,150,-375,162);
  ctx.stroke();
  ctx.strokeStyle = "#f5e4a8";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(-88,46);
  ctx.bezierCurveTo(-170,70,-230,150,-375,162);
  ctx.stroke();

  ctx.fillStyle = "#111821"; ctx.strokeStyle = "#b99a55"; ctx.lineWidth = 4;
  roundRect(-88,-62,176,124,24,true,true);
  const t = state.crank;

  if(state.fuelTanks && ["rotary","turbojet","turbofan","rocket"].includes(state.secondaryEngine)){
    ctx.fillStyle="#1f2937"; ctx.strokeStyle="#d8bf7a"; ctx.lineWidth=3;
    roundRect(-78,-94,62,24,12,true,true);
    ctx.fillStyle="#fde68a"; ctx.font="bold 9px system-ui"; ctx.fillText("FUEL",-66,-78);
    ctx.strokeStyle="#d8bf7a"; ctx.beginPath(); ctx.moveTo(-16,-82); ctx.lineTo(0,-58); ctx.stroke();
  }

  if(state.secondaryEngine === "electric"){
    ctx.strokeStyle="#93c5fd"; ctx.lineWidth=5; ctx.beginPath(); ctx.arc(0,0,42,0,Math.PI*2); ctx.stroke();
    ctx.save(); ctx.rotate(t*2.4); for(let i=0;i<6;i++){ ctx.rotate(Math.PI/3); ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(34,0); ctx.stroke(); } ctx.restore();
    ctx.strokeStyle="#93c5fd"; ctx.lineWidth=4; ctx.beginPath(); ctx.moveTo(-42,0); ctx.lineTo(-88,46); ctx.stroke();
    ctx.fillStyle="#bfdbfe"; ctx.font="bold 11px system-ui"; ctx.fillText("SECOND E-MOTOR",-50,80);
  } else if(state.secondaryEngine === "rotary"){
    ctx.strokeStyle="#93c5fd"; ctx.lineWidth=4; ctx.beginPath(); ctx.ellipse(0,0,54,38,0,0,Math.PI*2); ctx.stroke();
    ctx.save(); ctx.rotate(t*1.7); ctx.fillStyle="#dbeafe"; ctx.beginPath(); ctx.moveTo(0,-30); ctx.lineTo(30,24); ctx.lineTo(-30,24); ctx.closePath(); ctx.fill(); ctx.restore();
    if(state.on && getThrottle()>.08){ ctx.fillStyle="#fb923c"; ctx.globalAlpha=.85; ctx.beginPath(); ctx.arc(36,-10,13+Math.sin(t*6)*3,0,Math.PI*2); ctx.fill(); ctx.globalAlpha=1; }
    ctx.fillStyle="#bfdbfe"; ctx.font="bold 11px system-ui"; ctx.fillText("ROTARY GEN",-34,80);
  } else if(state.secondaryEngine === "rocket"){
    ctx.fillStyle="#1f2937"; roundRect(-28,-45,56,75,16,true,true);
    ctx.strokeStyle="#cbd5e1"; ctx.beginPath(); ctx.moveTo(-24,-22); ctx.lineTo(24,-22); ctx.stroke();
    if(state.on && getThrottle()>.04) {ctx.fillStyle="#fb923c"; ctx.beginPath(); ctx.moveTo(-18,30); ctx.lineTo(0,82+Math.sin(t*10)*10); ctx.lineTo(18,30); ctx.fill();}
    ctx.fillStyle="#bfdbfe"; ctx.font="bold 11px system-ui"; ctx.fillText("ROCKET BOOST",-45,80);
  } else {
    const fan = state.secondaryEngine === "turbofan";
    ctx.strokeStyle="#93c5fd"; ctx.lineWidth=4; ctx.beginPath(); ctx.arc(-38,0,fan?38:32,0,Math.PI*2); ctx.stroke();
    ctx.save(); ctx.translate(-38,0); ctx.rotate(t*2); for(let i=0;i<(fan?12:9);i++){ ctx.rotate(Math.PI*2/(fan?12:9)); ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(fan?30:24,0); ctx.stroke(); } ctx.restore();
    ctx.fillStyle="#17212d"; ctx.strokeStyle="#64748b"; roundRect(0,-25,50,50,12,true,true);
    if(state.on && getThrottle()>.05){ ctx.fillStyle="#facc15"; ctx.globalAlpha=.8; ctx.beginPath(); ctx.moveTo(18,0); ctx.quadraticCurveTo(46,-20,70,0); ctx.quadraticCurveTo(46,20,18,0); ctx.fill(); ctx.globalAlpha=1; }
    ctx.strokeStyle="#fb923c"; ctx.lineWidth=4; ctx.beginPath(); ctx.moveTo(50,-16); ctx.lineTo(88,0); ctx.lineTo(50,16); ctx.stroke();
    ctx.fillStyle="#bfdbfe"; ctx.font="bold 11px system-ui"; ctx.fillText(fan ? "FAN BOOSTER" : "JET BOOSTER",-44,80);
  }
  ctx.fillStyle="#d8bf7a"; ctx.font="bold 10px system-ui"; ctx.fillText("LINKED TO MAIN SHAFT",-60,98);
  ctx.restore();
}

function drawFuelCellAddonModule(){
  if(state.hybridSystem !== "fuel_cell" || state.type === "fuel_cell") return;
  ctx.save();
  ctx.translate(-360,92);
  ctx.fillStyle="#111821"; ctx.strokeStyle="#60a5fa"; ctx.lineWidth=4;
  roundRect(-88,-56,176,112,22,true,true);
  if(state.fuelTanks){
    ctx.fillStyle="#17212d"; ctx.strokeStyle="#93c5fd";
    roundRect(-78,-42,54,28,14,true,true); roundRect(-78,6,54,28,14,true,true);
    ctx.fillStyle="#bfdbfe"; ctx.font="bold 9px system-ui"; ctx.fillText("H₂",-60,-24); ctx.fillText("H₂",-60,24);
  } else {
    ctx.fillStyle="#64748b"; ctx.font="bold 9px system-ui"; ctx.fillText("TANKS OFF",-78,-20);
  }
  ctx.fillStyle="#0f2433"; ctx.strokeStyle="#bfdbfe"; roundRect(-10,-42,54,84,10,true,true);
  for(let x=-2;x<=34;x+=9){ ctx.beginPath(); ctx.moveTo(x,-34); ctx.lineTo(x,34); ctx.stroke(); }
  ctx.fillStyle="#13283a"; ctx.strokeStyle="#93c5fd"; roundRect(52,-34,58,68,16,true,true);
  ctx.save(); ctx.translate(81,0); ctx.rotate(state.crank*2.4); ctx.strokeStyle="#dbeafe"; ctx.lineWidth=4; for(let i=0;i<5;i++){ctx.rotate(Math.PI*2/5); ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(22,0); ctx.stroke();} ctx.restore();
  ctx.strokeStyle="#93c5fd"; ctx.lineWidth=5; ctx.beginPath(); ctx.moveTo(110,0); ctx.bezierCurveTo(170,0,220,-10,290,-12); ctx.stroke();
  if(state.on && getThrottle()>.05){ ctx.fillStyle="rgba(191,219,254,.75)"; for(let i=0;i<4;i++){ctx.beginPath(); ctx.arc(118+((state.crank*18+i*13)%50),30+Math.sin(state.crank+i)*7,3,0,Math.PI*2); ctx.fill();} }
  ctx.fillStyle="#bfdbfe"; ctx.font="bold 10px system-ui"; ctx.fillText("FUEL CELL ADD-ON",-70,72);
  ctx.restore();
}

function drawPremiumSystemOverlays(){
  drawNuclearModule();
  drawFuelCellAddonModule();
  drawSecondaryEngineModule();
}



function roundedRectPath(x, y, w, h, r){
  const rr = Math.min(r, w/2, h/2);
  ctx.moveTo(x + rr, y);
  ctx.lineTo(x + w - rr, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + rr);
  ctx.lineTo(x + w, y + h - rr);
  ctx.quadraticCurveTo(x + w, y + h, x + w - rr, y + h);
  ctx.lineTo(x + rr, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - rr);
  ctx.lineTo(x, y + rr);
  ctx.quadraticCurveTo(x, y, x + rr, y);
}

function drawEngineCover(cx, cy, scale){
  if(!state.engineCover || state.engineCover === "none") return;
  const cfg = getConfig();
  const cover = state.engineCover;
  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(scale, scale);

  const family = cfg.family;
  const layout = cfg.layout || state.type;
  const isJet = family === "jet";
  const isElectric = family === "electric";
  const isRadial = layout === "radial";
  const width = isJet ? 680 : isElectric ? 520 : isRadial ? 410 : 620;
  const height = isJet ? 190 : isElectric ? 230 : isRadial ? 410 : 285;
  const x = -width / 2;
  const y = isJet ? -height / 2 + 6 : isRadial ? -height / 2 : -height / 2 - 10;

  const palette = {
    corvette_red:{fill:"#c82323", fill2:"#7a1115", stroke:"rgba(255,255,255,.24)", accent:"#161922", accent2:"#d7dce6", alpha:.98, label:"PERFORMANCE", subLabel:"V ENGINE"},
    transparent:{fill:"rgba(220,238,255,.20)", stroke:"rgba(191,219,254,.82)", accent:"rgba(147,197,253,.88)", alpha:.22, label:"CLEAR COVER", subLabel:"TECHNICAL"},
    black:{fill:"rgba(7,10,15,.78)", stroke:"rgba(255,255,255,.18)", accent:"rgba(185,154,85,.88)", alpha:.78, label:"LUXURY COVER", subLabel:"PREMIUM"},
    aluminum:{fill:"rgba(210,216,220,.68)", stroke:"rgba(255,255,255,.80)", accent:"rgba(90,102,116,.88)", alpha:.68, label:"ALUMINUM", subLabel:"BRUSHED"},
    carbon:{fill:"rgba(10,13,18,.72)", stroke:"rgba(148,163,184,.44)", accent:"rgba(100,116,139,.9)", alpha:.72, label:"CARBON FIBER", subLabel:"LIGHTWEIGHT"},
    gold:{fill:"rgba(10,10,12,.76)", stroke:"rgba(216,191,122,.90)", accent:"rgba(216,191,122,.95)", alpha:.76, label:"GOLD TRIM", subLabel:"SIGNATURE"},
    glass:{fill:"rgba(45,73,95,.34)", stroke:"rgba(125,211,252,.78)", accent:"rgba(186,230,253,.86)", alpha:.34, label:"SMOKED GLASS", subLabel:"SHOWCASE"}
  }[cover] || null;
  if(!palette){ ctx.restore(); return; }

  function coverClipPath(){
    ctx.beginPath();
    if(isRadial){
      ctx.arc(0, 0, 205, 0, Math.PI * 2);
    } else if(isJet){
      ctx.ellipse(0, 0, width/2, height/2, 0, 0, Math.PI*2);
    } else if(cover === "corvette_red"){
      roundedRectPath(x + 12, y + 8, width - 24, height - 8, 48);
    } else {
      roundedRectPath(x, y, width, height, 42);
    }
  }

  if(cover === "corvette_red" && !isJet && !isRadial && !isElectric){
    const sx = x + 6;
    const sy = y + 2;
    const sw = width - 12;
    const sh = height + 4;
    const topY = sy + 16;
    const botY = sy + sh - 14;

    ctx.save();
    ctx.shadowColor = "rgba(0,0,0,.28)";
    ctx.shadowBlur = 24;
    ctx.shadowOffsetY = 10;
    ctx.fillStyle = palette.fill;
    ctx.strokeStyle = palette.stroke;
    ctx.lineWidth = 4;
    roundRect(sx, sy, sw, sh, 46, true, true);
    ctx.restore();

    ctx.save();
    coverClipPath();
    ctx.clip();
    const redGrad = ctx.createLinearGradient(sx, sy, sx, sy + sh);
    redGrad.addColorStop(0, "#ff6b6b");
    redGrad.addColorStop(.12, "#d93434");
    redGrad.addColorStop(.55, "#b51f24");
    redGrad.addColorStop(1, "#740d12");
    ctx.fillStyle = redGrad;
    ctx.fillRect(sx - 30, sy - 30, sw + 60, sh + 60);

    const gloss = ctx.createLinearGradient(sx, sy, sx + sw, sy + sh);
    gloss.addColorStop(0, "rgba(255,255,255,.28)");
    gloss.addColorStop(.35, "rgba(255,255,255,.03)");
    gloss.addColorStop(1, "rgba(255,255,255,.12)");
    ctx.fillStyle = gloss;
    ctx.fillRect(sx, sy, sw, sh);

    ctx.strokeStyle = "rgba(255,255,255,.08)";
    ctx.lineWidth = 2;
    for(let i=0; i<6; i++){
      const yy = sy + 28 + i*32;
      ctx.beginPath();
      ctx.moveTo(sx + 24, yy);
      ctx.lineTo(sx + sw - 24, yy - 10);
      ctx.stroke();
    }
    ctx.restore();

    const centerTop = topY + 8;
    const centerBottom = botY - 18;
    const spineW = sw * .36;
    const spineX = -spineW / 2;
    const sideInset = 28;
    const sidePanelW = sw * .28;
    const sidePanelH = sh * .28;

    // Main raised center spine
    ctx.save();
    const spineGrad = ctx.createLinearGradient(0, topY, 0, centerBottom);
    spineGrad.addColorStop(0, "#f14b4b");
    spineGrad.addColorStop(.45, "#c91f24");
    spineGrad.addColorStop(1, "#8d1218");
    ctx.fillStyle = spineGrad;
    ctx.strokeStyle = "rgba(255,255,255,.16)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(spineX + 40, centerTop);
    ctx.lineTo(spineX + spineW - 40, centerTop);
    ctx.lineTo(spineX + spineW, centerTop + 36);
    ctx.lineTo(spineX + spineW - 34, centerBottom);
    ctx.lineTo(spineX + 34, centerBottom);
    ctx.lineTo(spineX, centerTop + 36);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    // Vents in the center spine
    const ventCount = 4;
    for(let i=0; i<ventCount; i++){
      const vx = spineX + 58 + i*(spineW-116)/ventCount;
      const vw = 42;
      const vy = centerTop + 52 + i*2;
      const vh = 92;
      ctx.save();
      ctx.fillStyle = "#94171b";
      ctx.beginPath();
      ctx.moveTo(vx, vy);
      ctx.lineTo(vx + vw, vy + 6);
      ctx.lineTo(vx + vw - 10, vy + vh);
      ctx.lineTo(vx - 8, vy + vh - 10);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,.12)";
      ctx.stroke();
      const ventGrad = ctx.createLinearGradient(vx, vy, vx+vw, vy+vh);
      ventGrad.addColorStop(0, "rgba(255,255,255,.18)");
      ventGrad.addColorStop(.25, "rgba(255,255,255,.03)");
      ventGrad.addColorStop(1, "rgba(0,0,0,.24)");
      ctx.fillStyle = ventGrad;
      ctx.fill();
      ctx.restore();
    }

    // Side badge panels
    function drawBadgePanel(px, py, pw, ph, text, text2, angle){
      ctx.save();
      ctx.translate(px, py);
      ctx.rotate(angle);
      ctx.fillStyle = palette.accent;
      ctx.strokeStyle = "rgba(255,255,255,.14)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-pw/2 + 24, -ph/2);
      ctx.lineTo(pw/2, -ph/2);
      ctx.lineTo(pw/2 - 28, ph/2);
      ctx.lineTo(-pw/2, ph/2);
      ctx.lineTo(-pw/2 + 24, -ph/2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      const metalGrad = ctx.createLinearGradient(-pw/2, -ph/2, pw/2, ph/2);
      metalGrad.addColorStop(0, "rgba(255,255,255,.02)");
      metalGrad.addColorStop(.4, "rgba(255,255,255,.14)");
      metalGrad.addColorStop(.7, "rgba(255,255,255,.55)");
      metalGrad.addColorStop(1, "rgba(200,210,225,.12)");
      ctx.fillStyle = metalGrad;
      ctx.fillRect(-pw/2 + 12, -ph/2 + 8, pw - 24, ph - 16);

      ctx.restore();
    }

    drawBadgePanel(-sw*.27, sy + sh*.57, sidePanelW, sidePanelH, "V8", "PERFORMANCE", -0.34);
    drawBadgePanel(sw*.27, sy + sh*.31, sidePanelW*1.02, sidePanelH*.84, "ENGINE", "MIDSHIP", -0.08);

    // Sharp styling ribs and center emblem detail
    ctx.save();
    ctx.strokeStyle = "rgba(120,10,14,.86)";
    ctx.lineWidth = 6;
    const ribs = [
      [sx + 84, sy + 86, -40, 62],
      [sx + 162, sy + 70, -38, 70],
      [sx + sw - 164, sy + 86, 38, 70],
      [sx + sw - 88, sy + 104, 40, 62]
    ];
    ribs.forEach(([rx, ry, ox, oy])=>{
      ctx.beginPath();
      ctx.moveTo(rx, ry);
      ctx.lineTo(rx + ox, ry + oy);
      ctx.stroke();
    });
    ctx.restore();

    // small mounting tabs for realism
    ctx.save();
    ctx.fillStyle = "#a11519";
    [[sx+34,sy+sh-18],[sx+sw*.35,sy+sh+4],[sx+sw*.70,sy+sh+4],[sx+sw-34,sy+sh-18]].forEach(([mx,my])=>{
      roundRect(mx-10,my-8,20,16,5,true,false);
      ctx.fillStyle = "#d22a2f";
      roundRect(mx-8,my-6,16,12,4,true,false);
      ctx.fillStyle = "#8d1115";
      ctx.beginPath();
      ctx.arc(mx,my,2.2,0,Math.PI*2);
      ctx.fill();
      ctx.fillStyle = "#a11519";
    });
    ctx.restore();

    ctx.restore();
    return;
  }

  ctx.globalAlpha = 1;
  ctx.fillStyle = palette.fill;
  ctx.strokeStyle = palette.stroke;
  ctx.lineWidth = 4;

  if(isRadial){
    ctx.beginPath();
    ctx.arc(0, 0, 205, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 86, 0, Math.PI * 2);
    ctx.strokeStyle = palette.accent;
    ctx.lineWidth = 5;
    ctx.stroke();
  } else if(isJet){
    ctx.beginPath();
    ctx.ellipse(0, 0, width/2, height/2, 0, 0, Math.PI*2);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(-width*.28, 0, 62, height*.34, 0, 0, Math.PI*2);
    ctx.strokeStyle = palette.accent;
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(width*.34, 0, 76, height*.38, 0, 0, Math.PI*2);
    ctx.stroke();
  } else {
    roundRect(x, y, width, height, 42, true, true);
    ctx.strokeStyle = palette.accent;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(x + 52, y + height * .50);
    ctx.bezierCurveTo(x + width * .28, y + height * .12, x + width * .72, y + height * .12, x + width - 52, y + height * .50);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x + 62, y + height * .78);
    ctx.lineTo(x + width - 62, y + height * .78);
    ctx.stroke();
  }

  if(cover === "carbon"){
    ctx.save();
    coverClipPath();
    ctx.clip();
    ctx.strokeStyle = "rgba(255,255,255,.10)";
    ctx.lineWidth = 2;
    for(let i=-520;i<620;i+=22){
      ctx.beginPath(); ctx.moveTo(i, y - 80); ctx.lineTo(i + 260, y + height + 80); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(i + 130, y + height + 80); ctx.lineTo(i - 130, y - 80); ctx.stroke();
    }
    ctx.restore();
  }

  if(cover === "aluminum"){
    ctx.save();
    coverClipPath();
    ctx.clip();
    ctx.strokeStyle = "rgba(255,255,255,.22)";
    ctx.lineWidth = 3;
    for(let yy=y+18; yy<y+height; yy+=18){ ctx.beginPath(); ctx.moveTo(x-20, yy); ctx.lineTo(x+width+20, yy-8); ctx.stroke(); }
    ctx.restore();
  }

  if(cover === "transparent" || cover === "glass"){
    ctx.save();
    ctx.globalAlpha = cover === "glass" ? .38 : .28;
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    if(isRadial){ ctx.arc(-70,-72,60,0,Math.PI*2); }
    else if(isJet){ ctx.ellipse(-width*.18, -height*.20, width*.16, height*.12, -.25, 0, Math.PI*2); }
    else { roundRect(x + width*.12, y + 28, width*.34, 34, 18, true, false); }
    ctx.fill();
    ctx.restore();
  }

  ctx.restore();
}

function drawGraph(x,y,w,h){
  ctx.save();
  if(state.ecoMode){
    ctx.translate(x,y);
    ctx.fillStyle = "rgba(17,24,33,.72)";
    ctx.strokeStyle = "#2a384a";
    roundRect(0,0,w,h,18,true,true);
    ctx.fillStyle = "#c8d4e3";
    ctx.font = "bold 13px system-ui";
    ctx.fillText("Eco mode active", 14, 26);
    ctx.font = "12px system-ui";
    ctx.fillText("Graph and some effects are reduced for smoother performance.", 14, 52);
    ctx.restore();
    return;
  }
  ctx.translate(x,y);
  ctx.fillStyle = "rgba(17,24,33,.72)";
  ctx.strokeStyle = "#2a384a";
  roundRect(0,0,w,h,18,true,true);

  ctx.strokeStyle = "rgba(255,255,255,.08)";
  ctx.lineWidth = 1;
  for(let i=1;i<5;i++){
    ctx.beginPath();
    ctx.moveTo(0,h*i/5);
    ctx.lineTo(w,h*i/5);
    ctx.stroke();
  }

  const data = state.dynoData || [];
  const mode = state.dynoGraphMode || "powerTorque";
  function drawCurve(key, color, maxVal){
    if(data.length <= 2) return;
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    data.forEach((d,i) => {
      const px = (d.r / Math.max(1,state.revLimit)) * w;
      const py = h - ((d[key] || 0) / Math.max(1,maxVal)) * h * .82 - h * .08;
      if(i===0) ctx.moveTo(px,py); else ctx.lineTo(px,py);
    });
    ctx.stroke();
  }

  if(data.length > 2){
    const maxP = Math.max(1, ...data.map(d => d.p || 0));
    const maxO = Math.max(1, ...data.map(d => Math.abs(d.o || 0)));
    const maxB = Math.max(1, ...data.map(d => d.b || 0));
    const maxT = Math.max(120, ...data.map(d => d.t || 20));
    if(mode === "powerTorque" || mode === "all"){
      drawCurve("p", "#60a5fa", maxP);
      drawCurve("o", "#fb923c", maxO);
    }
    if(mode === "boostTemp" || mode === "all"){
      drawCurve("b", "#a78bfa", maxB);
      drawCurve("t", "#ef4444", maxT);
    }
    // RPM limit and approximate shift/redline marker
    ctx.strokeStyle = "rgba(239,68,68,.7)";
    ctx.lineWidth = 2;
    ctx.setLineDash([5,5]);
    ctx.beginPath();
    ctx.moveTo(w*.82, 8);
    ctx.lineTo(w*.82, h-8);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  ctx.fillStyle = "#c8d4e3";
  ctx.font = "bold 12px system-ui";
  const legend = mode === "boostTemp" ? "Dyno graph: purple boost / red temp" : mode === "all" ? "Dyno graph: power / torque / boost / temp" : "Dyno graph: blue power / orange torque";
  ctx.fillText(legend, 14, 22);
  ctx.restore();
}

function getSceneScale(baseScale){
  return baseScale * state.sceneZoom;
}

function getSceneCenter(w, h){
  return {
    x: w * .5 + state.scenePanX * CANVAS_DPR,
    y: h * .46 + state.scenePanY * CANVAS_DPR
  };
}

function clampSceneView(){
  state.sceneZoom = Math.max(.20, Math.min(1.8, state.sceneZoom));
  state.scenePanX = Math.max(-900, Math.min(900, state.scenePanX));
  state.scenePanY = Math.max(-520, Math.min(520, state.scenePanY));
}

function resetSceneView(){
  state.scenePanX = 0;
  state.scenePanY = 0;
  state.sceneZoom = DEFAULT_SCENE_ZOOM;
  clampSceneView();
}

function refreshSceneIndicator(){
  const z = $("sceneZoomLabel");
  if(z) z.textContent = `${Math.round(state.sceneZoom * 100)}%`;
  const slider = $("sceneZoomSlider");
  if(slider) slider.value = String(Math.round(state.sceneZoom * 100));
  const d = $("sceneDefaultLabel");
  if(d) d.textContent = `${Math.round(DEFAULT_SCENE_ZOOM * 100)}%`;
}

function drawFuelDeliveryVisual(cx, cy, scale){
  const cfg = getConfig();
  if(!fuelSystemApplies(cfg)) return;
  const isAircraftFuel = ["turbofan","geared_turbofan","turboprop"].includes(state.type);
  const isCarb = state.fuelSystem === "carburetor";
  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(scale, scale);
  const x = isAircraftFuel ? -88 : (cfg.family === "rotary" ? -188 : -230);
  const y = isAircraftFuel ? -42 : -148;

  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = "#60a5fa";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(x - 46, y - 24);
  ctx.quadraticCurveTo(x - 8, y - 54, x + 34, y - 18);
  ctx.stroke();

  if(isCarb){
    const grad = ctx.createLinearGradient(x - 34, y - 32, x + 34, y + 42);
    grad.addColorStop(0, "#e5e7eb");
    grad.addColorStop(.5, "#64748b");
    grad.addColorStop(1, "#1f2937");
    ctx.fillStyle = grad;
    ctx.strokeStyle = "#cbd5e1";
    ctx.lineWidth = 2.5;
    roundRect(x - 34, y - 24, 68, 52, 8, true, true);
    ctx.fillStyle = "#0f172a";
    ctx.beginPath();
    ctx.ellipse(x, y - 26, 30, 10, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#facc15";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x - 20, y + 34);
    ctx.lineTo(x + 20, y + 34);
    ctx.stroke();
    ctx.fillStyle = "#fde68a";
    ctx.font = "bold 10px system-ui";
    ctx.textAlign = "center";
    ctx.fillText("CARB", x, y + 50);
  }else{
    ctx.strokeStyle = "#dbeafe";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(x - 44, y);
    ctx.lineTo(x + 54, y);
    ctx.stroke();
    const count = isAircraftFuel ? 4 : 3;
    for(let i=0;i<count;i++){
      const ix = x - 32 + i * (86 / Math.max(1, count - 1));
      ctx.fillStyle = "#e5e7eb";
      ctx.strokeStyle = "#1e293b";
      ctx.lineWidth = 2;
      roundRect(ix - 7, y - 8, 14, 34, 5, true, true);
      ctx.strokeStyle = "#f97316";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(ix, y + 28);
      ctx.quadraticCurveTo(ix + 7, y + 42, ix + 18, y + 50);
      ctx.stroke();
    }
    ctx.fillStyle = "#bfdbfe";
    ctx.font = "bold 10px system-ui";
    ctx.textAlign = "center";
    ctx.fillText("INJ", x + 5, y - 14);
  }
  ctx.restore();
}

function draw(){
  const w = canvas.width, h = canvas.height;
  ctx.setTransform(1,0,0,1,0,0);
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle = "#0b0f14";
  ctx.fillRect(0,0,w,h);

  if(!state.ecoMode){
    ctx.strokeStyle = "rgba(255,255,255,.04)";
    ctx.lineWidth = 1;
    for(let x=0;x<w;x+=50*CANVAS_DPR){
      ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,h); ctx.stroke();
    }
    for(let y=0;y<h;y+=50*CANVAS_DPR){
      ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(w,y); ctx.stroke();
    }
  }

  // EXTEND, don't stretch: when the side menu is hidden, keep the original
  // scene scale/anchor as if the 410px menu still existed. The extra width
  // becomes additional canvas space to the right instead of resizing the engine.
  const lockedSceneW = state.panelMinimized ? Math.max(640 * CANVAS_DPR, w - 410 * CANVAS_DPR) : w;
  const baseS = Math.min(lockedSceneW/980, h/620);
  const s = getSceneScale(baseS);
  const center = getSceneCenter(lockedSceneW, h);
  const cfg = getConfig();

  ctx.save();
  ctx.translate(center.x, center.y);
  ctx.scale(s*CANVAS_DPR, s*CANVAS_DPR);
  ctx.translate(-lockedSceneW*.5/(s*CANVAS_DPR), -h*.46/(s*CANVAS_DPR));

  const sceneCX = lockedSceneW*.5;
  const sceneCY = h*.46;
  const drawScale = baseS*CANVAS_DPR;
  if(cfg.family === "piston"){
    drawPistonBanks(sceneCX, sceneCY, drawScale);
  } else if(cfg.family === "rotary"){
    drawRotary(sceneCX, sceneCY, drawScale);
  } else if(cfg.family === "electric"){
    drawElectric(sceneCX, sceneCY, drawScale);
  } else if(cfg.family === "linear"){
    drawLinear(sceneCX, sceneCY, drawScale);
  } else if(cfg.family === "external" || cfg.family === "hydraulic"){
    drawExternal(sceneCX, sceneCY, drawScale);
  } else {
    drawJet(sceneCX, sceneCY, drawScale);
  }

  drawEngineCover(sceneCX, sceneCY, drawScale);
  drawFuelDeliveryVisual(sceneCX, sceneCY, drawScale);
  drawGearboxAssembly(sceneCX, sceneCY, drawScale);

  ctx.save();
  ctx.translate(sceneCX, sceneCY);
  ctx.scale(drawScale, drawScale);
  drawPremiumSystemOverlays();
  ctx.restore();

  ctx.restore();

  if(state.graphVisible){
    drawGraph(24*CANVAS_DPR, h - 190*CANVAS_DPR, Math.min(420*CANVAS_DPR, w*.45), 150*CANVAS_DPR);
  }
  requestAnimationFrame(draw);
}

function updateReadoutLabels(){
  const cfg = getConfig();
  if(cfg.family === "jet"){
    $("outputLabel").textContent = "Thrust";
    $("powerLabel").textContent = state.type === "turboprop" ? "Shaft power" : "Power eq.";
    $("tempLabel").textContent = "EGT";
    $("auxLabel").textContent = state.type === "turbofan" ? "Bypass" : state.type === "turboprop" ? "Prop dia." : "Afterburner";
  } else if(cfg.family === "electric"){
    $("outputLabel").textContent = "Torque";
    $("powerLabel").textContent = "Power";
    $("tempLabel").textContent = state.type === "fuel_cell" ? "Stack temp" : "Motor temp";
    $("auxLabel").textContent = state.type === "fuel_cell" ? "H₂ pressure" : "Voltage";
  } else {
    $("outputLabel").textContent = "Torque";
    $("powerLabel").textContent = "Power";
    $("tempLabel").textContent = "Temp";
    $("auxLabel").textContent = (state.type.includes("turbo")) ? "Boost" : (state.type.includes("hybrid") ? "Battery" : "Boost");
  }
}


function applyGaugeStyle(){
  const cluster = $("dashboardGauges");
  if(!cluster) return;
  cluster.classList.remove("gaugeStyleMaybach","gaugeStyleLuxuryWhite","gaugeStyleLfa","gaugeStyleDigitalBlue");
  let style = state.gaugeStyle || "classic";
  if(style === "sport") style = "lfa";
  state.gaugeStyle = style;
  if(style === "maybach") cluster.classList.add("gaugeStyleMaybach");
  if(style === "luxury_white") cluster.classList.add("gaugeStyleLuxuryWhite");
  if(style === "lfa") cluster.classList.add("gaugeStyleLfa");
  if(style === "digital_blue") cluster.classList.add("gaugeStyleDigitalBlue");
  if($("gaugeStyle") && $("gaugeStyle").value !== style) $("gaugeStyle").value = style;
}

function applyGaugeDisplayMode(){
  const cluster = $("dashboardGauges");
  if(!cluster) return;
  const mode = state.gaugeDisplayMode || "analog";
  cluster.classList.toggle("digitalMode", mode === "digital");
  cluster.classList.toggle("analogMode", mode !== "digital");
  if($("gaugeDisplayMode") && $("gaugeDisplayMode").value !== mode) $("gaugeDisplayMode").value = mode;
}

function setGauge(id, fraction){
  const el = $(id);
  if(!el) return;
  const f = Math.max(0, Math.min(1, Number.isFinite(fraction) ? fraction : 0));
  el.style.setProperty("--value", `${f * 270}deg`);
  el.style.setProperty("--needle", `${-135 + f * 270}deg`);
}

function setGaugeScale(scaleId, min, max, labels, formatter = v => `${v}`, tickCount = 30){
  const scale = $(scaleId);
  if(!scale) return;
  const key = `${min}|${max}|${tickCount}|${labels.join(',')}`;
  if(scale.dataset.key === key) return;
  scale.dataset.key = key;
  scale.innerHTML = "";
  for(let i = 0; i <= tickCount; i++){
    const tick = document.createElement('span');
    const tickAngle = (i / tickCount) * 270;
    tick.className = `gaugeTick${i % 5 === 0 ? ' major' : ''}`;
    if(scaleId === "rpmGaugeScale" && tickAngle >= 220) tick.className += " redline";
    tick.style.setProperty('--rot', `${-135 + tickAngle}deg`);
    scale.appendChild(tick);
  }
  const span = Math.max(1e-6, max - min);
  labels.forEach(value => {
    const frac = Math.max(0, Math.min(1, (value - min) / span));
    const angle = (-135 + frac * 270) * Math.PI / 180;
    const radius = 42;
    const label = document.createElement('span');
    label.className = 'gaugeTickLabel';
    label.textContent = formatter(value);
    label.style.left = `${50 + Math.cos(angle) * radius}%`;
    label.style.top = `${50 + Math.sin(angle) * radius}%`;
    scale.appendChild(label);
  });
}

function updateDashboardGauges(cfg){
  if(!$('dashboardGauges')) return;
  applyGaugeStyle();
  applyGaugeDisplayMode();
  const rpmLimit = Math.max(1000, state.revLimit || 7000);
  const rpmFrac = Math.min(1, Math.max(0, state.rpm / rpmLimit));
  setGauge("rpmGauge", rpmFrac);
  $("rpmGaugeName").textContent = "RPM";
  $("rpmGaugeText").textContent = Math.round(state.rpm);
  $("rpmGaugeUnit").textContent = "rpm";
  if($("rpmDigitalGaugeName")) $("rpmDigitalGaugeName").textContent = "RPM";
  if($("rpmDigitalGaugeText")) $("rpmDigitalGaugeText").textContent = Math.round(state.rpm);
  if($("rpmDigitalGaugeUnit")) $("rpmDigitalGaugeUnit").textContent = "rpm";
  $("rpmGaugeCaption").textContent = "Tachometer";
  const rpmMaxK = Math.max(1, Math.round(rpmLimit / 1000));
  setGaugeScale("rpmGaugeScale", 0, rpmMaxK, [], v => `${v}`, 30);
  const rpmRedlineStartFrac = 0.82;
  const rpmRedlineStartDeg = Math.round(rpmRedlineStartFrac * 270);
  if($("rpmGaugeRedline")) $("rpmGaugeRedline").style.setProperty("--redline-start", `${rpmRedlineStartDeg}deg`);
  if($("rpmGauge")) $("rpmGauge").classList.toggle("redlineActive", rpmFrac >= rpmRedlineStartFrac);

  const speedMax = cfg.family === "jet" ? aircraftMaxSpeedKmh() : Math.max(300, Math.min(430, getTheoreticalTopSpeedKmh ? getTheoreticalTopSpeedKmh() : 430));
  const roundedSpeedMax = Math.ceil(speedMax / 20) * 20;
  setGauge("speedGauge", state.speed / roundedSpeedMax);
  $("speedGaugeName").textContent = "Speed";
  $("speedGaugeText").textContent = Math.round(state.speed);
  $("speedGaugeUnit").textContent = "km/h";
  if($("speedDigitalGaugeName")) $("speedDigitalGaugeName").textContent = "Speed";
  if($("speedDigitalGaugeText")) $("speedDigitalGaugeText").textContent = Math.round(state.speed);
  if($("speedDigitalGaugeUnit")) $("speedDigitalGaugeUnit").textContent = "km/h";
  $("speedGaugeCaption").textContent = "Speedometer";
  setGaugeScale("speedGaugeScale", 0, roundedSpeedMax, [], v => `${v}`, 30);

  if($("gearGaugeText")){
    const gearLabel = cfg.family === "jet" ? "AIR" : gearDisplayLabel();
    $("gearGaugeName").textContent = "Gear / Power";
    $("gearGaugeText").textContent = gearLabel;
    $("gearGaugeUnit").textContent = cfg.family === "jet" ? "Aircraft" : state.transmissionMode === "auto" ? "Automatic" : "Manual";
    if($("gearHpText")) $("gearHpText").textContent = `${Math.round(state.power || 0)} ${cfg.family === "jet" && state.type === "turboprop" ? "shp" : "hp"}`;
    $("gearGaugeCaption").textContent = "Gear + HP indicator";
  }
  let auxValue = 0, auxMax = 3, auxText = "0.0", auxUnit = "bar", auxCaption = "Boost", auxName = "Boost", auxFormatter = v => `${v.toFixed ? v.toFixed(0) : v}`;
  if(cfg.family === "electric"){
    auxValue = state.type === "fuel_cell" ? (state.extra2 || 0) : (state.extra1 || 0);
    auxMax = state.type === "fuel_cell" ? 700 : 1000;
    auxText = Math.round(auxValue).toString();
    auxUnit = state.type === "fuel_cell" ? "bar" : "V";
    auxCaption = state.type === "fuel_cell" ? "Hydrogen pressure" : "System voltage";
    auxName = state.type === "fuel_cell" ? "H₂" : "Voltage";
    auxFormatter = v => `${Math.round(v)}`;
  } else if(cfg.family === "jet"){
    auxValue = state.type === "turbofan" ? (state.extra1 || 0) : state.afterburner ? 1 : 0;
    auxMax = state.type === "turbofan" ? 16 : 1;
    auxText = state.type === "turbofan" ? auxValue.toFixed(1) : (state.afterburner ? "ON" : "OFF");
    auxUnit = state.type === "turbofan" ? "BPR" : "AB";
    auxCaption = state.type === "turbofan" ? "Bypass ratio" : "Afterburner state";
    auxName = state.type === "turbofan" ? "Bypass" : "Afterburner";
    auxFormatter = v => `${Math.round(v)}`;
  } else if(state.type.includes("hybrid")){
    auxValue = state.extra2 || 0; auxMax = 100; auxText = Math.round(auxValue).toString(); auxUnit = "%"; auxCaption = "Battery charge"; auxName = "Battery";
    auxFormatter = v => `${Math.round(v)}`;
  } else {
    auxValue = state.type.includes("turbo") ? (state.extra1 || 0) : (state.aux || 0);
    auxMax = state.type.includes("turbo") ? 3 : 2;
    auxText = auxValue.toFixed(1); auxUnit = "bar"; auxCaption = "Boost pressure"; auxName = "Boost";
    auxFormatter = v => `${Number(v).toFixed(v % 1 ? 1 : 0)}`;
  }
  const digitalAfterburner = cfg.family === "jet" && !(state.type === "turbofan" || state.type === "geared_turbofan" || state.type === "turboprop");
  if($("auxGaugeCard")) $("auxGaugeCard").classList.toggle("auxDigital", digitalAfterburner);
  if(digitalAfterburner){
    $("afterburnerDigitalName").textContent = "Afterburner";
    $("afterburnerDigitalText").textContent = state.afterburner ? "ON" : "OFF";
    $("afterburnerDigitalUnit").textContent = "AB";
    $("boostGaugeCaption").textContent = "Afterburner status";
  }else{
    setGauge("boostGauge", auxValue / auxMax);
    $("boostGaugeName").textContent = auxName;
    $("boostGaugeText").textContent = auxText;
    $("boostGaugeUnit").textContent = auxUnit;
    if($("boostDigitalGaugeName")) $("boostDigitalGaugeName").textContent = auxName;
    if($("boostDigitalGaugeText")) $("boostDigitalGaugeText").textContent = auxText;
    if($("boostDigitalGaugeUnit")) $("boostDigitalGaugeUnit").textContent = auxUnit;
    $("boostGaugeCaption").textContent = auxCaption;
    setGaugeScale("boostGaugeScale", 0, auxMax, [], auxFormatter, 24);
  }

  const tempDisplay = cfg.family === "jet" ? state.temp + 350 : state.temp;
  const tempName = cfg.family === "jet" ? "Exhaust Temperature" : cfg.family === "electric" ? "Motor Temperature" : "Coolant Temperature";
  $("tempGaugeName").textContent = tempName;
  $("tempGaugeText").textContent = `${Math.round(tempDisplay)}°`;
  $("tempGaugeUnit").textContent = "°C";
  $("tempGaugeCaption").textContent = "Digital display";
}

function updateUI(){
  const cfg = getConfig();
  if(!gearboxVisualApplies(cfg) || engineIdleRpm(cfg) <= 0){
    state.starterEngaged = false;
    state.starterHoldTime = 0;
    state.starterGrinding = false;
  }
  const slowUIKey = [
    state.type,state.units,state.displacement,state.compression,state.extra1,state.extra2,state.revLimit,state.fuelSystem,
    state.turboAddon,state.hybridSystem,state.nuclearFission,state.secondaryEngine,state.systemPower,state.fuelTanks,
    state.load,state.fuel,state.timing,state.aircraftSpeedCommand,
    state.vehicleDrive,state.bodyType,state.spoilerPackage,state.tireType,state.tireSize,state.rimStyle,
    state.speedLimiterEnabled,state.speedLimitKmh,state.gearCount,state.transmissionMode,state.transmissionType,state.finalDrive,
    state.gearboxAnimation,state.gaugeStyle,state.gaugeDisplayMode,state.engineCover,state.exhaustManifold,
    state.intakePipeOffset,state.exhaustPipeOffset,state.pipesVisible,state.soundMode,state.soundVolume,
    state.dynoGraphMode,state.overlayMinimized,state.ecoMode,state.mobileMode,state.panelMinimized,state.experienceMode,
    state.noteOpen,state.launchControl,state.gearSelector
  ].join("|");
  const refreshSlowUI = slowUIKey !== lastSlowUIKey;
  if(refreshSlowUI){
    lastSlowUIKey = slowUIKey;
    refreshBodyTypeOptions();
  }
  setTextIfChanged($("runStatus"), state.on ? "Engine running" : "Engine off");
  $("runStatus").style.background = state.on ? "#22c55e" : "#e8eef7";
  $("startBtn").classList.toggle("on", state.on);
  $("startBtn").textContent = state.on ? "ENGINE RUNNING" : "START ENGINE";
  if($("starterBtn")){
    const starterApplies = gearboxVisualApplies(cfg) && engineIdleRpm(cfg) > 0;
    const crankingToStart = starterApplies && !state.on && state.starterEngaged && !state.starterGrinding;
    $("starterBtn").disabled = !starterApplies;
    $("starterBtn").classList.toggle("down", !!state.starterEngaged);
    $("starterBtn").classList.toggle("grinding", !!state.starterGrinding);
    const starterText = !starterApplies
      ? "STARTER NOT AVAILABLE"
      : state.starterGrinding
        ? "STARTER GRINDING · V"
        : crankingToStart
          ? `CRANKING ${Math.min(2, state.starterHoldTime || 0).toFixed(1)} / 2.0s`
          : state.starterEngaged
            ? "STARTER ENGAGED · V"
            : "ENGAGE STARTER · V";
    setTextIfChanged($("starterBtn"), starterText);
  }
  if(refreshSlowUI){
    if($("soundVolumeOut")) $("soundVolumeOut").textContent = `${Math.round(state.soundVolume || 0)}%`;
    if($("soundVolume")) $("soundVolume").value = state.soundVolume ?? 70;
    if($("soundMode")) $("soundMode").value = state.soundMode || "auto";
    if($("dynoGraphMode")) $("dynoGraphMode").value = state.dynoGraphMode || "powerTorque";
  }
  normalizeFuelSystem();
  if(refreshSlowUI){
    if($("fuelSystem")) $("fuelSystem").value = state.fuelSystem;
    if($("fuelSystemOut")) $("fuelSystemOut").textContent = fuelSystemLabel();
  }

  if(refreshSlowUI) updateReadoutLabels();
  updateBuildStats(cfg);
  if(refreshSlowUI) updateBuildSummary();

  if(refreshSlowUI){
    const premiumBits = [state.turboAddon !== "none" ? "+ " + state.turboAddon.replace("_","-") + " turbo" : "", state.hybridSystem !== "none" ? "+ " + (state.hybridSystem === "fuel_cell" ? "fuel cell" : state.hybridSystem + " hybrid") : "", state.nuclearFission !== "none" ? "+ nuclear" : "", state.secondaryEngine !== "none" ? "+ " + state.secondaryEngine : ""].filter(Boolean);
    const premiumType = ["w","v12","v16","h_engine","x_engine","compound_piston","geared_turbofan","scramjet","rocket","fuel_cell"].includes(state.type);
    $("layoutLabel").textContent = (premiumType ? "⚜ " : "") + cfg.label + (premiumBits.length ? " " + premiumBits.join(" ") : "");
    $("configLabel").textContent = `${cfg.units.name}: ${formatValue(state.units)}`;
  }
  setTextIfChanged($("rpmOut"), Math.round(state.rpm));
  setTextIfChanged($("gearOut"), transmissionApplies(cfg) ? gearDisplayLabel() : "—");
  setTextIfChanged($("speedOut"), speedDisplayText());
  setTextIfChanged($("transmissionLabel"), cfg.family === "jet" ? `Aircraft · ${speedDisplayText()}` : transmissionApplies(cfg) ? `${state.transmissionMode === "auto" ? "A" : "M"}${gearDisplayLabel()} · ${speedDisplayText()}` : "Direct drive");

  if(cfg.family === "jet"){
    setTextIfChanged($("outputOut"), `${state.output.toFixed(1)} kN`);
    setTextIfChanged($("powerOut"), `${Math.round(state.power)} ${state.type === "turboprop" ? "shp" : "hp eq."}`);
    if(state.type === "turbofan") setTextIfChanged($("auxOut"), `${(state.extra1 || 0).toFixed(1)}`);
    else if(state.type === "turboprop") setTextIfChanged($("auxOut"), `${(state.extra1 || 0).toFixed(1)} m`);
    else setTextIfChanged($("auxOut"), state.afterburner ? "ON" : "OFF");
    setTextIfChanged($("tempOut"), `${Math.round(state.temp + 350)}°C`);
  } else if(cfg.family === "electric"){
    setTextIfChanged($("outputOut"), `${Math.round(state.output)} Nm`);
    setTextIfChanged($("powerOut"), `${Math.round(state.power)} hp`);
    setTextIfChanged($("auxOut"), state.type === "fuel_cell" ? `${Math.round(state.extra2 || 0)} bar` : `${Math.round(state.extra1 || 0)} V`);
    setTextIfChanged($("tempOut"), `${Math.round(state.temp)}°C`);
  } else {
    setTextIfChanged($("outputOut"), `${Math.round(state.output)} Nm`);
    setTextIfChanged($("powerOut"), `${Math.round(state.power)} hp`);
    if(state.type.includes("hybrid")) setTextIfChanged($("auxOut"), `${Math.round(state.extra2 || 0)}%`);
    else if(state.type.includes("turbo")) setTextIfChanged($("auxOut"), `${(state.extra1 || 0).toFixed(1)} bar`);
    else setTextIfChanged($("auxOut"), `${state.aux.toFixed(1)} bar`);
    setTextIfChanged($("tempOut"), `${Math.round(state.temp)}°C`);
  }

  const nowMs = typeof performance !== "undefined" ? performance.now() : Date.now();
  if(refreshSlowUI || nowMs - lastGaugeUITime > 16){
    lastGaugeUITime = nowMs;
    updateDashboardGauges(cfg);
  }

  setTextIfChanged($("throttleOut"), `${Math.round(Math.max(state.throttle, state.gas ? 100 : 0))}%`);
  if($("aircraftThrottleOut")) setTextIfChanged($("aircraftThrottleOut"), `${Math.round(state.throttle)}%`);
  if($("aircraftSpeedOut")) setTextIfChanged($("aircraftSpeedOut"), `${Math.round(state.aircraftSpeedCommand || 0)} km/h`);
  if(refreshSlowUI){
    $("loadOut").textContent = `${state.load}%`;
    if($("tireSizeOut")) $("tireSizeOut").textContent = `${Math.round(state.tireSize || 20)} in`;
    if($("tireType") && $("tireType").value !== state.tireType) $("tireType").value = state.tireType;
    if($("rimStyle") && $("rimStyle").value !== state.rimStyle) $("rimStyle").value = state.rimStyle;
  }
  normalizeSpeedLimiter();
  if(refreshSlowUI){
    if($("speedLimitOut")) $("speedLimitOut").textContent = `${state.speedLimitKmh} km/h`;
    if($("speedLimitKmh") && +$("speedLimitKmh").value !== state.speedLimitKmh) $("speedLimitKmh").value = state.speedLimitKmh;
    if($("speedLimiterBtn")){
      $("speedLimiterBtn").textContent = state.speedLimiterEnabled ? (state.speedLimiterActive ? "Electronic speed limiter active" : "Electronic speed limiter on") : "Electronic speed limiter off";
      $("speedLimiterBtn").classList.toggle("active", state.speedLimiterEnabled);
    }
    if($("gaugeDisplayMode") && $("gaugeDisplayMode").value !== (state.gaugeDisplayMode || "analog")) $("gaugeDisplayMode").value = state.gaugeDisplayMode || "analog";
    if($("gaugeStyle") && $("gaugeStyle").value !== (state.gaugeStyle || "classic")) $("gaugeStyle").value = state.gaugeStyle || "classic";
    $("dispOut").textContent = `${state.displacement.toFixed(1)} L`;
    $("compOut").textContent = `${state.compression.toFixed(1)}:1`;
    $("fuelOut").textContent = `${state.fuel.toFixed(2)} λ`;
    $("timingOut").textContent = `${state.timing}°`;
    $("limitOut").textContent = `${state.revLimit} rpm`;
    if($("systemPowerOut")) $("systemPowerOut").textContent = `${state.systemPower}%`;
    if($("engineCover") && $("engineCover").value !== state.engineCover) $("engineCover").value = state.engineCover;
    if($("exhaustManifold") && $("exhaustManifold").value !== (state.exhaustManifold || "equal_length_headers")) $("exhaustManifold").value = state.exhaustManifold || "equal_length_headers";
    if($("intakePipeOffsetOut")) $("intakePipeOffsetOut").textContent = `${state.intakePipeOffset || 0} px`;
    if($("exhaustPipeOffsetOut")) $("exhaustPipeOffsetOut").textContent = `${state.exhaustPipeOffset || 0} px`;
    if($("intakePipeOffset") && +$("intakePipeOffset").value !== (state.intakePipeOffset || 0)) $("intakePipeOffset").value = state.intakePipeOffset || 0;
    if($("exhaustPipeOffset") && +$("exhaustPipeOffset").value !== (state.exhaustPipeOffset || 0)) $("exhaustPipeOffset").value = state.exhaustPipeOffset || 0;
    if($("pipesVisibleBtn")){
      $("pipesVisibleBtn").textContent = state.pipesVisible === false ? "Pipes hidden" : "Pipes visible";
      $("pipesVisibleBtn").classList.toggle("active", state.pipesVisible !== false);
    }
    if($("fuelTankBtn")){
      const tanksMatter = activeTanksUsedByCurrentBuild();
      $("fuelTankBtn").disabled = false;
      $("fuelTankBtn").textContent = state.fuelTanks ? (tanksMatter ? "Fuel tanks visible / forced on" : "Fuel tanks forced on") : "Fuel tanks hidden";
      $("fuelTankBtn").classList.toggle("on", state.fuelTanks);
    }
    updateFamousMatchUI();
    toggleOverlayInfo(state.overlayMinimized);
    setEcoMode(state.ecoMode);
    setMobileMode(state.mobileMode);
    setPanelMinimized(state.panelMinimized);
    refreshSceneIndicator();
    updateVehiclePreview();
    $("unitsOut").textContent = `${cfg.units.name}: ${formatValue(state.units)}`;
    if(cfg.extra1) $("extra1Out").textContent = formatValue(state.extra1, cfg.extra1.suffix || "");
    if(cfg.extra2) $("extra2Out").textContent = formatValue(state.extra2, cfg.extra2.suffix || "");

    refreshDynamicControls();
    refreshTransmissionControls();
  }

  if(state.starterGrinding){
    $("warning").textContent = "Starter gear grinding: flywheel is faster than the starter motor.";
  } else if(!state.on && state.starterEngaged && (state.starterHoldTime || 0) > 0){
    $("warning").textContent = "Starter cranking: hold V for 2 seconds to start the engine.";
  } else if(state.temp > 115 && cfg.family !== "jet"){
    $("warning").textContent = "Warning: overheating. Reduce throttle or cool engine.";
  } else if(cfg.family === "jet" && state.temp > 250){
    $("warning").textContent = "Warning: high exhaust gas temperature.";
  } else if(state.rpm > state.revLimit * .96){
    $("warning").textContent = "Warning: near rev / spool limiter.";
  } else if(state.speedLimiterActive){
    $("warning").textContent = `Electronic speed limiter active at ${state.speedLimitKmh} km/h.`;
  } else if(!state.dyno){
    if(!$("warning").textContent.startsWith("Dyno complete")) $("warning").textContent = "";
  }
}

function step(timestamp){
  const now = Number.isFinite(timestamp) ? timestamp : (typeof performance !== "undefined" ? performance.now() : Date.now());
  const frameDt = lastPhysicsTime ? Math.min(.12, Math.max(0, (now - lastPhysicsTime) / 1000)) : 1 / 60;
  lastPhysicsTime = now;
  physicsAccumulator = Math.min(.12, physicsAccumulator + frameDt);
  let physicsSteps = 0;
  while(physicsAccumulator >= 1 / 60 && physicsSteps < 7){
    physics(1/60);
    dynoStep();
    physicsAccumulator -= 1 / 60;
    physicsSteps++;
  }
  if(physicsSteps >= 7) physicsAccumulator = 0;

  if(osc){
    const cfg = getConfig();
    const th = getThrottle();
    const famous = getCurrentFamousProfile();
    const famousSound = famous && famous.sound ? famous.sound : null;
    const profile = soundProfile();
    osc.type = profile.wave || waveForType();
    let baseFreq = 28 + state.rpm / (cfg.family === "electric" ? 65 : cfg.family === "jet" ? 34 : 42) + state.units * 1.2;
    baseFreq *= (famousSound && state.soundMode === "auto" ? (famousSound.base || 1) : profile.base || 1);
    if(isTurboType()) baseFreq += state.aux * 35;
    osc.frequency.value = baseFreq;
    const ecoFactor = state.ecoMode ? .45 : 1;
    const volume = Math.max(0, Math.min(1, (state.soundVolume ?? 70) / 100));
    gain.gain.value = state.on ? (.014 + th * (cfg.family === "jet" ? .045 : .035) + (famousSound && state.soundMode === "auto" ? .008 : 0)) * ecoFactor * volume : .0001;
    if(osc2 && gain2){
      osc2.type = profile.wave2 || "triangle";
      const mult = famousSound && state.soundMode === "auto" ? (famousSound.pulse || 1.6) : (profile.pulse || 1.5);
      osc2.frequency.value = cfg.family === "electric" ? 220 + state.rpm / 28 : baseFreq * mult;
      gain2.gain.value = state.on ? ((cfg.family === "electric" ? .008 + th*.012 : isTurboType() ? .004 + state.aux*.006 : .004 + th*.011) * (famousSound && state.soundMode === "auto" ? 1.35 : 1) * (state.ecoMode ? .18 : 1) * volume) : 0;
    }
    if(noiseGain){
      const jetNoise = cfg.family === "jet" ? .018 : 0;
      const turboHiss = isTurboType() ? state.aux * .012 : 0;
      const fuelCellAir = state.type === "fuel_cell" ? .008 + th*.01 : 0;
      const famousNoise = famousSound && state.soundMode === "auto" ? (famousSound.noise || .5) * .006 : 0;
      noiseGain.gain.value = state.on ? (.002 + jetNoise + turboHiss + fuelCellAir + famousNoise + (profile.noise || .35)*.008 + th*.004) * (state.ecoMode ? .28 : 1) * volume : 0;
    }
  }
  updateStarterAudio();

  const uiNow = typeof performance !== "undefined" ? performance.now() : Date.now();
  if(uiNow - lastLiveUITime > 16){
    lastLiveUITime = uiNow;
    updateUI();
  }
  requestAnimationFrame(step);
}


function setup(){
  document.querySelectorAll(".head[data-section]").forEach(btn => {
    btn.onclick = () => {
      const sec = $(btn.dataset.section + "Section");
      sec.style.display = sec.style.display === "none" ? "grid" : "none";
    };
  });
  initSelectInfo();
  renderMissingEngineGallery();
  loadDiscoveredEngineProfiles();
  renderDiscoveredEngineList();
  loadSavedBuilds();
  renderRaceResults();
  startWelcomeLetter();
  if($("collapseAllBtn")) $("collapseAllBtn").onclick = () => setAllMenus(true);
  if($("expandAllBtn")) $("expandAllBtn").onclick = () => setAllMenus(false);
  if($("graphToggleBtn")) $("graphToggleBtn").onclick = () => setGraphVisible(!state.graphVisible);
  refreshGraphToggle();
  if($("ecoModeBtn")) $("ecoModeBtn").onclick = () => setEcoMode(!state.ecoMode);
  if($("mobileModeBtn")) $("mobileModeBtn").onclick = () => setMobileMode(!state.mobileMode);
  if($("panelMinBtn")) $("panelMinBtn").onclick = () => setPanelMinimized(true);
  if($("soundMode")) $("soundMode").onchange = e => { state.soundMode = e.target.value; updateUI(); };
  if($("soundVolume")) $("soundVolume").oninput = e => { state.soundVolume = +e.target.value; updateUI(); };
  if($("dynoGraphMode")) $("dynoGraphMode").onchange = e => { state.dynoGraphMode = e.target.value; updateUI(); };
  if($("saveBuildBtn")) $("saveBuildBtn").onclick = saveCurrentBuild;
  if($("savedBuildList")) $("savedBuildList").onclick = e => {
    const btn = e.target.closest("[data-load-build]");
    if(btn) applySavedBuild(savedBuilds[+btn.dataset.loadBuild]);
  };
  if($("testZeroHundredBtn")) $("testZeroHundredBtn").onclick = () => runRaceTest("zero");
  if($("testQuarterMileBtn")) $("testQuarterMileBtn").onclick = () => runRaceTest("quarter");
  if($("testTopSpeedBtn")) $("testTopSpeedBtn").onclick = () => runRaceTest("top");
  if($("testTrackLapBtn")) $("testTrackLapBtn").onclick = () => runRaceTest("lap");
  if($("testAircraftTakeoffBtn")) $("testAircraftTakeoffBtn").onclick = () => runRaceTest("aircraft");
  if($("restorePanelBtn")){
    const restore = $("restorePanelBtn");
    restore.onclick = restorePanelMenus;
    restore.addEventListener("pointerdown", restorePanelMenus, true);
    restore.addEventListener("touchstart", restorePanelMenus, {capture:true, passive:false});
  }
  if($("overlayToggle")) $("overlayToggle").onclick = () => toggleOverlayInfo();
  if($("welcomeBeginner")) $("welcomeBeginner").onclick = () => setExperienceMode("beginner");
  if($("welcomeAdvanced")) $("welcomeAdvanced").onclick = () => setExperienceMode("advanced");
  if($("welcomeStartSim")){
    $("welcomeStartSim").onclick = () => closeWelcomeWithMode(state.experienceMode || "beginner");
    $("welcomeStartSim").addEventListener("pointerdown", e => { e.preventDefault(); closeWelcomeWithMode(state.experienceMode || "beginner"); }, {passive:false});
  }
  if($("welcomeEco")) $("welcomeEco").onclick = () => setEcoMode(!state.ecoMode);

  const sceneWrap = canvas.parentElement;
  let panPointerId = null, panStartX = 0, panStartY = 0, startPanX = 0, startPanY = 0;

  sceneWrap.addEventListener("pointerdown", e => {
    if(e.target.closest("button,input,select,.sceneControls,.overlay,.restorePanelBtn,.sceneDrivePad")) return;
    panPointerId = e.pointerId;
    panStartX = e.clientX;
    panStartY = e.clientY;
    startPanX = state.scenePanX;
    startPanY = state.scenePanY;
    sceneWrap.classList.add("dragging");
    if(sceneWrap.setPointerCapture){ try{ sceneWrap.setPointerCapture(e.pointerId); }catch(err){} }
  });
  sceneWrap.addEventListener("pointermove", e => {
    if(panPointerId !== e.pointerId) return;
    state.scenePanX = startPanX + (e.clientX - panStartX);
    state.scenePanY = startPanY + (e.clientY - panStartY);
    clampSceneView();
  });
  function endPan(e){
    if(panPointerId !== e.pointerId) return;
    if(sceneWrap.releasePointerCapture){ try{ sceneWrap.releasePointerCapture(e.pointerId); }catch(err){} }
    panPointerId = null;
    sceneWrap.classList.remove("dragging");
  }
  sceneWrap.addEventListener("pointerup", endPan);
  sceneWrap.addEventListener("pointercancel", endPan);
  const sceneZoomSlider = $("sceneZoomSlider");
  if(sceneZoomSlider){
    sceneZoomSlider.oninput = e => { state.sceneZoom = (+e.target.value) / 100; clampSceneView(); };
  }
  $("sceneReset").onclick = () => { resetSceneView(); beep(520, .03, "triangle", .02); };

  $("engineType").onchange = e => applyTypeDefaults(e.target.value);
  $("discoveredEngineList").onclick = e => {
    const item = e.target.closest("[data-profile-name]");
    if(!item) return;
    applyDiscoveredEngineByName(item.dataset.profileName);
  };
  if($("fuelSystem")) $("fuelSystem").onchange = e => { state.fuelSystem = e.target.value; updateUI(); };
  $("engineCover").onchange = e => { state.engineCover = e.target.value; updateUI(); };
  $("exhaustManifold").onchange = e => { state.exhaustManifold = e.target.value; updateUI(); };
  $("intakePipeOffset").oninput = e => { state.intakePipeOffset = +e.target.value; updateUI(); };
  $("exhaustPipeOffset").oninput = e => { state.exhaustPipeOffset = +e.target.value; updateUI(); };
  $("pipesVisibleBtn").onclick = () => { state.pipesVisible = state.pipesVisible === false; updateUI(); };
  $("turboAddon").onchange = e => { state.turboAddon = e.target.value; updateUI(); };
  $("hybridSystem").onchange = e => { state.hybridSystem = e.target.value; updateUI(); };
  $("fuelTankBtn").onclick = () => { state.fuelTanks = !state.fuelTanks; beep(state.fuelTanks ? 650 : 300, .04, "triangle", .025); updateUI(); };
  $("nuclearFission").onchange = e => { state.nuclearFission = e.target.value; updateUI(); };
  $("secondaryEngine").onchange = e => { state.secondaryEngine = e.target.value; updateUI(); };
  $("vehicleDrive").onchange = e => {
    state.vehicleDrive = e.target.value;
    if(state.vehicleDrive === "hover" && state.tireType === "street") state.tireType = "hover_pad";
    if(state.vehicleDrive === "hover" && state.rimStyle === "alloy") state.rimStyle = "hover_ring";
    if($("tireType")) $("tireType").value = state.tireType;
    if($("rimStyle")) $("rimStyle").value = state.rimStyle;
    updateUI();
  };
  $("bodyType").onchange = e => { state.bodyType = e.target.value; updateUI(); };
  $("spoilerPackage").onchange = e => { state.spoilerPackage = e.target.value; updateUI(); };
  $("tireType").onchange = e => { state.tireType = e.target.value; updateUI(); };
  $("tireSize").oninput = e => { state.tireSize = +e.target.value; updateUI(); };
  $("rimStyle").onchange = e => { state.rimStyle = e.target.value; updateUI(); };
  if($("speedLimiterBtn")) $("speedLimiterBtn").onclick = () => { state.speedLimiterEnabled = !state.speedLimiterEnabled; if(!state.speedLimiterEnabled) state.speedLimiterActive = false; beep(state.speedLimiterEnabled ? 680 : 260, .04, "triangle", .025); updateUI(); };
  if($("speedLimitKmh")) $("speedLimitKmh").oninput = e => { state.speedLimitKmh = +e.target.value; normalizeSpeedLimiter(); updateUI(); };
  $("gaugeStyle").onchange = e => { state.gaugeStyle = e.target.value; applyGaugeStyle(); updateUI(); };
  $("gaugeDisplayMode").onchange = e => { state.gaugeDisplayMode = e.target.value; applyGaugeDisplayMode(); updateUI(); };
  $("systemPower").oninput = e => { state.systemPower = +e.target.value; updateUI(); };
  $("unitsSlider").oninput = e => { state.units = +e.target.value; };
  $("displacement").oninput = e => { state.displacement = +e.target.value; };
  $("compression").oninput = e => { state.compression = +e.target.value; };
  $("extra1").oninput = e => { state.extra1 = +e.target.value; };
  $("extra2").oninput = e => { state.extra2 = +e.target.value; };
  $("afterburnerBtn").onclick = () => { state.afterburner = !state.afterburner; beep(state.afterburner ? 720 : 300, .05, "triangle", .03); updateUI(); };

  $("throttleSlider").oninput = e => { state.throttle = +e.target.value; if($("aircraftThrottleSlider")) $("aircraftThrottleSlider").value = state.throttle; };
  $("aircraftThrottleSlider").oninput = e => { state.throttle = +e.target.value; $("throttleSlider").value = state.throttle; };
  $("aircraftSpeedSlider").oninput = e => { state.aircraftSpeedCommand = +e.target.value; };
  $("loadSlider").oninput = e => { state.load = +e.target.value; };
  $("fuel").oninput = e => { state.fuel = +e.target.value; };
  $("timing").oninput = e => { state.timing = +e.target.value; };

  function setAutoMode(){ state.transmissionMode = "auto"; state.shiftBlockedReason = ""; refreshTransmissionControls(); }
  function setManualMode(){ state.transmissionMode = "manual"; state.shiftBlockedReason = ""; refreshTransmissionControls(); }
  function shiftUpManual(){ if(transmissionApplies(getConfig())){ if(state.transmissionMode !== "manual") state.transmissionMode = "manual"; requestShiftUp(); refreshTransmissionControls(); } }
  function shiftDownManual(){ if(transmissionApplies(getConfig())){ if(state.transmissionMode !== "manual") state.transmissionMode = "manual"; requestShiftDown(); refreshTransmissionControls(); } }
  function shiftUpRequest(){ if(transmissionApplies(getConfig())){ requestShiftUp(); refreshTransmissionControls(); } }
  function shiftDownRequest(){ if(transmissionApplies(getConfig())){ requestShiftDown(); refreshTransmissionControls(); } }

  $("autoModeBtn").onclick = setAutoMode;
  $("manualModeBtn").onclick = setManualMode;
  $("gearUpBtn").onclick = shiftUpRequest;
  $("gearDownBtn").onclick = shiftDownRequest;
  if($("parkBtn")) $("parkBtn").onclick = () => { requestPark(); refreshTransmissionControls(); };
  if($("neutralBtn")) $("neutralBtn").onclick = () => {
    if(state.transmissionMode !== "manual" || canManualShift()) setSelector("N", {force:true});
    refreshTransmissionControls();
  };
  if($("reverseBtn")) $("reverseBtn").onclick = () => {
    if(state.transmissionMode === "manual") requestShiftDown();
    else setSelector("R");
    refreshTransmissionControls();
  };
  if($("driveBtn")) $("driveBtn").onclick = () => {
    if(state.transmissionMode === "manual"){
      if(canManualShift()) setSelector("D", {force:true});
    } else {
      setSelector("D", {force:true});
    }
    refreshTransmissionControls();
  };
  if($("gearSelectorSelect")) $("gearSelectorSelect").onchange = e => {
    const value = e.target.value;
    if(value === "P") requestPark();
    else if(value === "D"){
      if(state.transmissionMode !== "manual" || canManualShift()) setSelector("D", {force:true});
    } else if(value === "N"){
      if(state.transmissionMode !== "manual" || canManualShift()) setSelector("N", {force:true});
    } else if(value === "R"){
      if(state.transmissionMode === "manual") requestShiftDown();
      else setSelector("R");
    }
    refreshTransmissionControls();
  };
  $("transmissionType").onchange = e => { state.transmissionType = e.target.value; if(state.transmissionType === "cvt") state.transmissionMode = "auto"; if(state.gearSelector === "D" && state.gear < 1) state.gear = 1; refreshTransmissionControls(); };
  if($("gearboxAnimationBtn")) $("gearboxAnimationBtn").onclick = () => { state.gearboxAnimation = state.gearboxAnimation === false ? true : false; refreshTransmissionControls(); };
  $("launchBtn").onclick = () => { state.launchControl = !state.launchControl; beep(state.launchControl ? 820 : 300, .05, "triangle", .03); refreshTransmissionControls(); };
  $("shortcutAuto").onclick = setAutoMode;
  $("shortcutManual").onclick = setManualMode;
  $("shortcutUp").onclick = shiftUpRequest;
  $("shortcutDown").onclick = shiftDownRequest;
  $("transmissionNoteToggle").onclick = () => { state.noteOpen = !state.noteOpen; refreshTransmissionControls(); };
  $("finalDrive").oninput = e => { state.finalDrive = +e.target.value; refreshTransmissionControls(); };
  $("gearCount").oninput = e => {
    state.gearCount = Math.max(1, Math.min(10, Math.round(+e.target.value || 1)));
    const maxGear = getMaxDrivenGear();
    if(state.gear > maxGear) state.gear = maxGear;
    if(state.gear < 1 && transmissionApplies(getConfig()) && normalizeGearSelector() === "D") state.gear = 1;
    if(state.transmissionType === "cvt") state.virtualRatio = getGearSetup().ratios[1] || state.virtualRatio || 1;
    refreshTransmissionControls();
  };

  $("revLimit").oninput = e => { state.revLimit = +e.target.value; };

  function setStarterEngaged(active, ev){
    if(ev) ev.preventDefault();
    const cfg = getConfig();
    if(active && (!gearboxVisualApplies(cfg) || engineIdleRpm(cfg) <= 0)){
      state.starterEngaged = false;
      state.starterHoldTime = 0;
      state.starterGrinding = false;
      updateUI();
      return;
    }
    state.starterEngaged = !!active;
    if(state.starterEngaged) startStarterAudio();
    else{
      state.starterHoldTime = 0;
      state.starterGrinding = false;
    }
    updateUI();
  }

  $("startBtn").onclick = () => {
    if(state.on) stopEngine();
    else startEngine();
  };

  if($("starterBtn")){
    const starterDown = ev => setStarterEngaged(true, ev);
    const starterUp = ev => setStarterEngaged(false, ev);
    $("starterBtn").onpointerdown = starterDown;
    $("starterBtn").onpointerup = starterUp;
    $("starterBtn").onpointerleave = starterUp;
    $("starterBtn").onpointercancel = starterUp;
  }

  ["clutch","brake","gas"].forEach(id => {
    const el = $(id);
    const key = id === "gas" ? "gas" : id;
    const down = (ev) => { if(ev) ev.preventDefault(); state[key] = true; el.classList.add("down"); if(id==="gas") beep(240,.035,"sawtooth",.02); };
    const up = (ev) => { if(ev) ev.preventDefault(); state[key] = false; el.classList.remove("down"); };
    el.onpointerdown = down;
    el.onpointerup = up;
    el.onpointerleave = up;
    el.onpointercancel = up;
  });

  const bindScenePadPedal = (btnId, stateKey, mainId) => {
    const el = $(btnId);
    if(!el) return;
    const down = (ev) => { if(ev) ev.preventDefault(); state[stateKey] = true; el.classList.add("down"); if($(mainId)) $(mainId).classList.add("down"); if(stateKey === "gas") beep(240,.035,"sawtooth",.02); };
    const up = (ev) => { if(ev) ev.preventDefault(); state[stateKey] = false; el.classList.remove("down"); if($(mainId)) $(mainId).classList.remove("down"); };
    el.onpointerdown = down;
    el.onpointerup = up;
    el.onpointerleave = up;
    el.onpointercancel = up;
  };
  bindScenePadPedal("sceneClutchBtn", "clutch", "clutch");
  bindScenePadPedal("sceneBrakeBtn", "brake", "brake");
  bindScenePadPedal("sceneGasBtn", "gas", "gas");
  if($("sceneShiftUpBtn")) $("sceneShiftUpBtn").onclick = shiftUpRequest;
  if($("sceneShiftDownBtn")) $("sceneShiftDownBtn").onclick = shiftDownRequest;
  if($("sceneAutoManualBtn")) $("sceneAutoManualBtn").onclick = () => { state.transmissionMode === "auto" ? setManualMode() : setAutoMode(); refreshTransmissionControls(); };

  const held = new Set();
  window.addEventListener("keydown", e => {
    if(e.repeat && !["w","W","ArrowUp","s","S","ArrowDown","c","C"].includes(e.key)) return;
    const tag = document.activeElement && document.activeElement.tagName;
    if(tag === "INPUT" || tag === "SELECT") return;

    if(e.key === " "){ e.preventDefault(); $("startBtn").click(); }
    if(e.key === "a" || e.key === "A"){ setAutoMode(); }
    if(e.key === "m" || e.key === "M"){ setManualMode(); }
    if(e.key === "[" || e.key === ","){ shiftDownRequest(); }
    if(e.key === "]" || e.key === "."){ shiftUpRequest(); }
    if(e.key === "p" || e.key === "P"){ requestPark(); refreshTransmissionControls(); }
    if(e.key === "l" || e.key === "L"){ $("launchBtn").click(); }
    if(e.key === "0"){ resetSceneView(); e.preventDefault(); }
    if(e.shiftKey && e.key === "ArrowLeft"){ state.scenePanX -= 24; clampSceneView(); e.preventDefault(); }
    if(e.shiftKey && e.key === "ArrowRight"){ state.scenePanX += 24; clampSceneView(); e.preventDefault(); }
    if(e.shiftKey && e.key === "ArrowUp"){ state.scenePanY -= 24; clampSceneView(); e.preventDefault(); }
    if(e.shiftKey && e.key === "ArrowDown"){ state.scenePanY += 24; clampSceneView(); e.preventDefault(); }

    if(e.key === "v" || e.key === "V"){ setStarterEngaged(true, e); }
    if(e.key === "w" || e.key === "W" || e.key === "ArrowUp"){ state.gas = true; $("gas").classList.add("down"); if($("sceneGasBtn")) $("sceneGasBtn").classList.add("down"); e.preventDefault(); }
    if(e.key === "s" || e.key === "S" || e.key === "ArrowDown"){ state.brake = true; $("brake").classList.add("down"); if($("sceneBrakeBtn")) $("sceneBrakeBtn").classList.add("down"); e.preventDefault(); }
    if(e.key === "c" || e.key === "C"){ state.clutch = true; $("clutch").classList.add("down"); if($("sceneClutchBtn")) $("sceneClutchBtn").classList.add("down"); }
  });

  window.addEventListener("keyup", e => {
    if(e.key === "v" || e.key === "V"){ setStarterEngaged(false, e); }
    if(e.key === "w" || e.key === "W" || e.key === "ArrowUp"){ state.gas = false; $("gas").classList.remove("down"); if($("sceneGasBtn")) $("sceneGasBtn").classList.remove("down"); }
    if(e.key === "s" || e.key === "S" || e.key === "ArrowDown"){ state.brake = false; $("brake").classList.remove("down"); if($("sceneBrakeBtn")) $("sceneBrakeBtn").classList.remove("down"); }
    if(e.key === "c" || e.key === "C"){ state.clutch = false; $("clutch").classList.remove("down"); if($("sceneClutchBtn")) $("sceneClutchBtn").classList.remove("down"); }
  });

  $("dynoBtn").onclick = () => {
    state.dyno = true;
    state.dynoRpm = getConfig().family === "jet" ? 2500 : 1000;
    state.dynoData = [];
    state.on = true;
    state.throttle = 100;
    $("throttleSlider").value = 100;
    $("dynoBtn").classList.add("active");
    $("warning").textContent = "Dyno running...";
    if(!osc) startAudio();
  };

  $("coolBtn").onclick = () => {
    state.temp = Math.max(20, state.temp - 35);
    beep(700, .05, "triangle", .03);
  };

  if($("summaryResetBtn")) $("summaryResetBtn").onclick = resetBuildStats;

  $("resetBtn").onclick = () => {
    Object.assign(state, {
      on:false, type:"v", units:8, displacement:4.0, compression:10.0, extra1:0, extra2:0,
      afterburner:false, throttle:0, gas:false, clutch:false, brake:false, load:35,
      fuel:1.0, fuelSystem:"injection", timing:0, revLimit:7000, rpm:0, temp:20, output:0, power:0, aux:0, crank:0,
      speed:0, gear:1, gearSelector:"P", shiftBlockedReason:"", lastShiftTime:0, shiftFromGear:1, gearCount:7, transmissionMode:"auto", transmissionType:"dct", launchControl:false, finalDrive:3.42, gearboxAnimation:true, starterTimer:0, starterEngaged:false, starterHoldTime:0, starterMotorRpm:0, starterMotorAngle:0, starterGrinding:false, shiftTimer:0, shiftDuration:0, virtualRatio:0, noteOpen:false, graphVisible:true, dynoGraphMode:"powerTorque", soundMode:"auto", soundVolume:70, raceResults:[], engineCover:"none", exhaustManifold:"equal_length_headers", intakePipeOffset:0, exhaustPipeOffset:0, pipesVisible:true,
      dyno:false, dynoRpm:1000, dynoData:[], turboAddon:"none", hybridSystem:"none", nuclearFission:"none", secondaryEngine:"none", systemPower:50, fuelTanks:true, scenePanX:0, scenePanY:0, sceneZoom:DEFAULT_SCENE_ZOOM, overlayMinimized:true, ecoMode:false, lastMatchedProfile:null, vehicleDrive:"rwd", bodyType:"coupe", spoilerPackage:"none", tireType:"street", tireSize:20, rimStyle:"alloy", speedLimiterEnabled:false, speedLimitKmh:120, speedLimiterActive:false, gaugeStyle:"classic", gaugeDisplayMode:"analog", panelMinimized:false, mobileMode:false, experienceMode:"advanced", buildStats:makeEmptyBuildStats()
    });
    stopAudio();
    stopStarterAudio();
    $("throttleSlider").value = 0;
    $("loadSlider").value = 35;
    $("fuel").value = 1.0;
    $("timing").value = 0;
    $("warning").textContent = "";
    state.raceResults = [];
    renderRaceResults();
    if($("soundMode")) $("soundMode").value = "auto";
    if($("soundVolume")) $("soundVolume").value = 70;
    if($("dynoGraphMode")) $("dynoGraphMode").value = "powerTorque";
    $("dynoBtn").classList.remove("active");
    refreshGraphToggle();
    $("gearCount").value = 7;
    $("finalDrive").value = 3.42;
    $("transmissionType").value = "dct";
    if($("fuelSystem")) $("fuelSystem").value = "injection"; $("turboAddon").value = "none"; $("hybridSystem").value = "none"; $("nuclearFission").value = "none"; $("secondaryEngine").value = "none"; $("systemPower").value = 50; $("vehicleDrive").value = "rwd"; $("bodyType").value = "coupe"; $("spoilerPackage").value = "none"; if($("speedLimitKmh")) $("speedLimitKmh").value = 120; $("engineCover").value = "none"; $("exhaustManifold").value = "equal_length_headers"; $("intakePipeOffset").value = 0; $("exhaustPipeOffset").value = 0; if($("pipesVisibleBtn")) $("pipesVisibleBtn").classList.add("active");
    ["clutch","brake","gas","sceneClutchBtn","sceneBrakeBtn","sceneGasBtn"].forEach(id => { const el=$(id); if(el) el.classList.remove("down"); });
    applyTypeDefaults("v");
  };

  applyTypeDefaults("v");
  draw();
  step();
}

window.addEventListener("error", event => {
  const warning = $("warning");
  if(warning) warning.textContent = "Recovered from a UI error. Try resetting if something looks stuck.";
  console.error(event.error || event.message);
});
window.addEventListener("unhandledrejection", event => {
  const warning = $("warning");
  if(warning) warning.textContent = "Recovered from an async UI error. Try resetting if something looks stuck.";
  console.error(event.reason);
});

setup();
