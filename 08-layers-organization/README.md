# Module 8: Layers, Scenes & Organization

## Managing Complex Projects

As projects grow complex, organization becomes survival. This module teaches professional file management that scales from simple rooms to entire buildings.

**Time Required:** 2-3 hours  
**Difficulty:** Intermediate  
**Prerequisites:** Modules 1-7 completed

---

## 📖 What You'll Learn

- SketchUp's unique layer system
- Scene management
- Model organization strategies
- File management best practices
- Template creation
- Working with large models

---

## Part 1: Layers (SketchUp's Unique Approach)

### Layers Are Different Here!

**Most software (Photoshop, AutoCAD, Illustrator):**
- Layers contain objects
- Objects "live" on layers
- Delete layer = delete objects

**SketchUp:**
- Layers control VISIBILITY only
- Objects don't "live" on layers
- Layers are assigned to groups/components
- **Layer 0 contains all raw geometry**

**This is critical to understand!**

---

### The Layer 0 Rule

**THE MOST IMPORTANT RULE:**

> **All raw geometry (edges and faces) must stay on Layer 0.**

**ONLY groups and components get assigned to other layers.**

**Why?**
- Prevents geometry from disappearing unexpectedly
- Avoids the #1 beginner mistake
- Keeps model reliable

**Breaking this rule causes:**
- Missing geometry
- Confusing errors
- Unfixable models

**Remember: Layer 0 for raw geometry. Always!**

---

### When to Use Layers

**Good uses:**
- Grouping related components (all furniture)
- Showing/hiding model phases (design options)
- Controlling visibility for presentations
- Managing model complexity

**Bad uses:**
- Organizing raw geometry (use groups instead!)
- As primary organization (use Outliner!)
- Like Photoshop layers (wrong paradigm!)

---

## Part 2: Creating and Managing Layers

### Opening the Layers Panel

**Access:**
1. Window → Layers
2. Panel appears (dock it on side)

**Default:** Every new model has "Layer 0"

---

### Creating Layers

**Click the "+" button**

**Good naming examples:**
- Architecture
- Furniture
- Lighting
- Plumbing_Fixtures
- Electrical
- Landscape
- Construction_Lines

**Bad naming:**
- Layer 1, Layer 2 (meaningless)
- Misc (too vague)
- Stuff (unprofessional)

---

### Layer Properties

**Each layer has:**

1. **Visibility (eye icon)**
   - Click to toggle on/off
   - Hidden = components on that layer disappear

2. **Lock (lock icon)**
   - Locked = can't select/edit
   - Protects finished work

3. **Color (color swatch)**
   - "Color by Layer" mode (advanced)
   - Visual coding

4. **Active (radio button)**
   - Current drawing layer
   - **Keep Layer 0 active while modeling!**

---

### Assigning Layers to Objects

**Correct method:**

1. Create geometry on Layer 0
2. Make it a Group or Component
3. Select the group/component
4. Window → Entity Info
5. Change Layer dropdown
6. Group now assigned to that layer

**Shortcut:**
1. Select group/component
2. Layers panel
3. Right-click layer name
4. "Move to Layer"

---

## Part 3: Layer Strategies for Different Projects

### Residential Interior

```
Layer 0 (all raw geometry)
├── Architecture
├── Furniture
├── Lighting
├── Decor
├── Window_Treatments
└── Construction_Lines (guides, references)
```

**Usage:**
- Model walls on Layer 0 → Group → assign to Architecture
- Model furniture on Layer 0 → Component → assign to Furniture
- Turn off Furniture to see just architecture
- Turn off Decor for client meeting about furniture only

---

### Commercial Building

```
Layer 0
├── Site
├── Structure
├── Exterior_Walls
├── Interior_Walls
├── Floors
├── Ceilings
├── Roof
├── Windows_Doors
├── MEP (mechanical/electrical/plumbing)
├── Furniture
└── Landscape
```

**Why more layers?**
- Complexity requires more control
- Different contractors need different views
- Phases of work
- Code reviews need specific views

---

### Design Options

```
Layer 0
├── Existing_Conditions
├── Option_A_Walls
├── Option_A_Furniture
├── Option_B_Walls
├── Option_B_Furniture
└── Option_C_Walls
```

**Usage:**
- Show client Option A: Turn on A layers, off B and C
- Compare options: Toggle between
- Present multiple designs in one file

---

## Part 4: Scenes (Saved Views)

### What Are Scenes?

**Scenes save:**
- Camera position
- Layer visibility
- Style settings
- Shadow settings
- Section plane positions
- Active section cuts

**Think of scenes as bookmarks for your model!**

---

### Creating Scenes

**Method 1:**
1. Set up your view perfectly:
   - Camera position
   - Layer visibility
   - Shadows on/off
   - Style selection
2. Window → Scenes
3. Click "+" button
4. Name the scene
5. Done!

**Method 2:**
1. Set up view
2. Click "Add Scene" in Scenes toolbar
3. Name it

**Scenes appear as tabs at top of window!**

---

### Professional Scene Naming

**Bad names:**
- Scene 1, Scene 2
- Default, Untitled

**Good names:**
- Hero_View_Living_Room
- Floor_Plan_Level_1
- Elevation_South
- Detail_Kitchen_Island
- Section_Looking_North

**Why?** When you have 20 scenes, names matter!

---

### Scene Properties

**Right-click scene tab → Properties:**

**What to save:**
- ✅ Camera Location (always)
- ✅ Hidden Geometry (usually)
- ✅ Visible Layers (usually)
- ✅ Active Section Planes (if using)
- ✅ Style and Fog (for presentation)
- ✅ Shadow Settings (for presentation)
- ⚠️ Axes Location (rarely)

**Customize per scene!**

---

### Scene-Based Workflows

**Presentation workflow:**

1. **Scene: "Model - Working View"**
   - Everything visible
   - Good work angle
   - No shadows (faster)

2. **Scenes: Presentation views**
   - Curated angles
   - Proper layer visibility
   - Shadows on
   - Best style

3. **Scenes: Technical views**
   - Floor plans
   - Elevations
   - Sections
   - Parallel projection

**Toggle between scenes with keyboard:**
- Next scene: Page Down
- Previous scene: Page Up

---

### Scene Animations

**Scenes can create animations!**

**Setup:**
1. Create multiple scenes
2. File → Export → Animation
3. Choose format (MP4, image sequence)
4. SketchUp transitions between scenes!

**Uses:**
- Client presentations
- Design walkthroughs
- Marketing videos

---

## Part 5: The Outliner (Your Best Friend)

### What Is the Outliner?

**Access:** Window → Outliner

**Shows:**
- Model hierarchy
- Every group and component
- Nesting structure
- Names of everything

**It's like a file tree for your 3D model!**

---

### Using the Outliner

**Selection:**
- Click any item in Outliner
- It selects in model
- Great for finding buried objects!

**Renaming:**
- Slow double-click name
- Type new name
- Or right-click → Rename

**Visibility:**
- Eye icon toggles visibility
- Faster than finding in 3D space

**Nesting:**
- Shows parent-child relationships
- Expand/collapse with arrows
- Organize hierarchy

---

### Outliner Best Practices

**Keep it organized:**

```
✅ Good structure:
Building
├── Exterior
│   ├── Walls
│   ├── Roof
│   └── Windows_Doors
├── Interior
│   ├── Level_1
│   │   ├── Living_Room
│   │   ├── Kitchen
│   │   └── Bath
│   └── Level_2
└── Furniture
    ├── Living_Room_Furniture
    └── Bedroom_Furniture
```

```
❌ Bad structure:
Group#1
Group#2
Component#47
Copy of Group#1
Group#1#1
[50 more unnamed items]
```

**Professional = organized Outliner!**

---

## Part 6: Entity Info (Object Inspector)

**Access:** Window → Entity Info

**Shows details about selected object:**
- Type (Group, Component, Edge, Face)
- Layer assignment
- If solid or not
- Bounding box dimensions
- Component definition name

**Critical for:**
- Checking if object is solid (for Solid Tools)
- Verifying layer assignment
- Getting precise dimensions
- Understanding object type

---

## Part 7: Model Info (File-Level Settings)

**Access:** Window → Model Info

**Important sections:**

**1. Units**
- Set precision
- Choose measurement system
- Enable/disable snapping

**2. Components**
- Component paths
- Default behavior

**3. File**
- File name
- File size
- Last saved date

**4. Statistics**
- Face count
- Edge count
- Component instances
- **Purge Unused** (clean file!)

**5. Text**
- Default text settings

---

## Part 8: Working with Large Models

### Model Performance

**As models grow:**
- Slower orbit/pan
- Longer save times
- Laggier tool response

**Why?**
- Too many edges/faces
- High-poly components
- Large textures
- Inefficient geometry

---

### Optimization Strategies

**1. Use Low-Poly Components**
- From 3D Warehouse, choose simple versions
- Complex models slow everything

**2. Purge Unused**
- Window → Model Info → Statistics
- Click "Purge Unused"
- Removes unused components/materials

**3. Hide What You're Not Working On**
- Hide layers
- Hide geometry
- Simpler view = faster

**4. Turn Off Shadows While Modeling**
- View → Shadows (off)
- Only enable for presentations

**5. Reduce Texture Sizes**
- Use 1024×1024 max
- Don't import 4K textures!

**6. Use Sections Instead of Hiding**
- Section planes cut model
- Faster than hiding hundreds of objects

---

### Section Planes (Advanced)

**What they do:**
- Cut model to see inside
- Like X-ray but cleaner

**Creating sections:**
1. Tools → Section Plane
2. Click face to orient section
3. Plane appears
4. Move plane with Move tool

**Using sections:**
- Double-click section to activate
- See interior of model
- Hide section object if desired
- Create scene with section active

**Professional use:**
- Wall sections
- Floor plan cuts
- Detail views
- Construction documents

---

## Part 9: File Management

### File Naming

**Bad:**
- Untitled.skp
- Project.skp
- New.skp
- Copy of Copy of House.skp

**Good:**
- 2024-03-15_Johnson_Kitchen_v01.skp
- Smith_Residence_Option_A_v03.skp
- Office_Renovation_Final_v02.skp

**Formula:**
`[Date]_[Client]_[Project]_[Version].skp`

**Why?**
- Chronological sorting
- Easy to find
- Version control
- Professional

---

### Version Control

**Don't rely on Autosave only!**

**Manual versioning:**
1. Significant milestone reached
2. File → Save As
3. Increment version: v01 → v02
4. Keep previous versions

**Why?**
- Revert if needed
- Client changes mind
- Compare versions
- Safety net

**How many versions to keep?**
- Major milestones: Keep all
- Minor iterations: Keep last 3-5
- After project delivery: Archive all

---

### Folder Structure

**Professional project folder:**

```
[Client_Name]_[Project]/
├── 01_Client_Files/
│   ├── Brief.pdf
│   ├── Reference_Images/
│   └── Dimensions.xlsx
├── 02_SketchUp_Models/
│   ├── Working/
│   │   ├── v01.skp
│   │   ├── v02.skp
│   │   └── v03.skp
│   └── Final/
│       └── Final_v01.skp
├── 03_Exports/
│   ├── Images/
│   ├── PDFs/
│   └── 3D_Files/
├── 04_Materials/
│   └── Custom_Textures/
└── 05_Deliverables/
    └── Presentation.pdf
```

**This is professional-grade organization!**

---

## Part 10: Templates

### Why Create Templates?

**Every project starts the same:**
- Set units
- Set precision
- Configure styles
- Load common components
- Create standard layers

**Template = pre-configured start point!**

---

### Creating Your Template

**Steps:**
1. Start new file
2. Set up perfectly:
   - Window → Model Info → Units → Millimeters
   - Precision: 0.00mm
   - Create standard layers
   - Set default style
   - Add commonly-used components
3. File → Save As Template
4. Name: "My_Professional_Template"
5. Check "Set as default"

**Every new file starts perfect!**

---

### Template Ideas

**Residential template:**
- Standard layers
- Common furniture components
- Material palette
- Scene templates

**Commercial template:**
- Code-compliant settings
- Structural grid
- Standard details
- Section planes set up

---

## 🎯 Module 8 Success Checklist

**Layers:**
- [ ] I understand Layer 0 rule
- [ ] I only assign layers to groups/components
- [ ] I use layers for visibility control
- [ ] I have logical layer naming
- [ ] I understand layer vs. organization

**Scenes:**
- [ ] I create scenes for different views
- [ ] I name scenes descriptively
- [ ] I use scenes for presentations
- [ ] I toggle between scenes easily
- [ ] I understand scene properties

**Organization:**
- [ ] I use Outliner constantly
- [ ] I name all groups/components
- [ ] I use logical nesting
- [ ] My models are organized
- [ ] I can find objects quickly

**File Management:**
- [ ] I use good file naming
- [ ] I version my files
- [ ] I have organized project folders
- [ ] I purge unused regularly
- [ ] I created a template

---

## 💡 Key Takeaways

**1. Layer 0 rule is sacred**
- Raw geometry only on Layer 0
- Never break this rule
- Prevents 90% of problems

**2. Scenes are presentation power**
- Curated views impress clients
- Toggle instantly
- Professional workflow

**3. Organization = professional**
- Named objects
- Logical structure
- Efficient workflow

**4. Good files scale**
- Start organized
- Stay organized
- Finish organized

---

## 🚀 What's Next?

Your workflow is now professional-grade! Time to supercharge it with extensions!

**Next Module:** [Extensions & Plugins →](../09-extensions/README.md)

Module 9 introduces game-changing plugins that 10X your speed and capabilities!

---

<div align="center">

**🎉 You now organize like a pro!**

*Organization is the difference between chaos and mastery.*  
*Your workflow is now scalable and professional!*

</div>

