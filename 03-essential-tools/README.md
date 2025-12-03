# Module 3: Essential Tools - Your Modeling Arsenal

## The Heart of SketchUp

This is where you become a modeler. Every object you'll ever create uses these tools. Master them, and you can build anything.

**Time Required:** 4-6 hours  
**Difficulty:** Beginner to Intermediate  
**Prerequisites:** Modules 1 & 2 completed

---

## 📖 What You'll Learn

- All 12 essential modeling tools
- When to use each tool (and why)
- Professional workflows
- Precision techniques
- Tool combinations
- Common mistakes and fixes

---

## 🎯 Learning Objectives

By the end of this module:
- ✅ You'll know every essential tool inside-out
- ✅ You'll choose the right tool instinctively
- ✅ You'll work with precision, not guessing
- ✅ You'll understand tool combinations
- ✅ You'll model faster than you think

---

## The Tool Philosophy

**SketchUp has only 12 core tools.** That's it!

Compare that to:
- Photoshop: 100+ tools
- AutoCAD: 200+ commands
- Blender: Overwhelming complexity

**SketchUp's genius:** Simple tools, infinite combinations.

---

## Part 1: Drawing Tools (Creating Geometry)

These tools CREATE edges and faces.

---

### 🖊️ LINE TOOL (L)

**The most important tool in SketchUp.**

Everything starts with lines. Every edge, every shape, every detail begins here.

#### What It Does:
- Creates edges (lines) between points
- Edges define faces
- Faces are what become 3D

#### How to Use:
1. Press **L**
2. Click first point
3. Move mouse to second point
4. Click to place
5. Keep going for connected lines, or ESC to stop

#### The Magic of Inference:

Watch your cursor! SketchUp shows you:

**Colored dots:**
- **Green dot** = On Face
- **Red dot** = On Red Axis
- **Green dot** = On Green Axis  
- **Blue dot** = On Blue Axis
- **Cyan dot** = On Edge
- **Red X** = Endpoint
- **Blue circle** = Center
- **Magenta circle** = Intersection

**Trust these! They're guiding you!**

#### Locking to Axes:

**Critical skill:**

1. Start drawing a line
2. Move roughly in the direction you want
3. When the line turns RED, GREEN, or BLUE
4. **Hold SHIFT** - it locks!
5. Now the line can only go that direction
6. Type length and hit Enter

**Example:**
```
L → Click → Move right until line turns RED
→ SHIFT (locks to red)  
→ Type "3000" → Enter
(Perfect horizontal line, exactly 3000mm!)
```

#### Precision Line Drawing Exercise:

**Task:** Create a perfect square path using only lines

1. Press **L**
2. Click anywhere (first corner)
3. Move right, see RED line, hold SHIFT
4. Type "2000", Enter
5. Move up, see BLUE line (wait... blue is UP/DOWN)
6. Move forward (green direction)
7. Type "2000", Enter
8. Move left (red), hold SHIFT
9. Type "2000", Enter
10. Click on your starting point - **FACE APPEARS!**

**🎉 You just discovered the golden rule:**

> **When edges form a closed loop, SketchUp creates a face automatically!**

---

### ⬜ RECTANGLE TOOL (R)

**The efficiency champion.**

Why draw 4 lines when you can make a rectangle instantly?

#### What It Does:
- Creates perfect rectangles
- Always creates a face
- Perfect for walls, floors, surfaces

#### How to Use:

**Method 1: Click-drag-click**
1. Press **R**
2. Click first corner
3. Move mouse (see rectangle forming)
4. Click to set second corner

**Method 2: Click-type (RECOMMENDED)**
1. Press **R**
2. Click first corner
3. **Don't click again!**
4. Type dimensions: `3000,2000`
5. Hit Enter
6. Perfect 3000×2000mm rectangle!

#### The Golden Comma:

`3000,2000` means:
- First number = First axis dimension
- Comma = separator
- Second number = Second axis dimension

#### Rectangle Exercise:

**Task:** Create three perfect rectangles

1. **Square:** Type `1000,1000`
2. **Wide rectangle:** Type `5000,2000`
3. **Tall rectangle:** Type `1000,3000`

---

### ⭕ CIRCLE TOOL (C)

**For anything round.**

#### What It Does:
- Creates circles
- Actually creates many-sided polygons (looks like circle)
- Default = 24 sides

#### How to Use:

**Method 1: Click-drag-click**
1. Press **C**
2. Click center point
3. Move mouse out (see circle growing)
4. Click to set radius

**Method 2: Click-type (PRECISE)**
1. Press **C**
2. Click center point
3. Type radius: `500` (for 500mm radius)
4. Hit Enter

#### Changing Number of Sides:

**Before clicking second point:**
- Type `48s` for 48-sided circle (smoother)
- Type `12s` for 12-sided circle (less smooth)
- Type `6s` for hexagon!
- Type `3s` for triangle!

**After creating circle:**
- Type `48s` + Enter (changes last circle)

#### Circle Exercise:

**Task:** Create these circles

1. 1000mm radius, 24 sides (default)
2. 500mm radius, 48 sides (smooth)
3. 800mm radius, 6 sides (hexagon!)

**Pro Tip:** Higher sides = smoother, but more geometry = slower model

**Typical usage:**
- Small circles: 24 sides (default)
- Large visible circles: 36-48 sides
- Structural columns: 24 sides
- Decorative: 48-96 sides

---

### 🎯 ARC TOOL (A)

**For curves and rounded corners.**

#### What It Does:
- Creates curved lines (arcs)
- 3-click process

#### How to Use:

1. Press **A**
2. Click start point
3. Click end point
4. Move mouse to set curve depth (bulge)
5. Click to set
6. Or type a number for exact radius

#### Arc Tips:

**Lock direction first:**
- After second click, tap arrow key
- Locks arc to that plane
- ↑ = vertical arc
- ← or → = horizontal arcs

#### Arc Exercise:

**Task:** Create rounded corner

1. Draw a rectangle (R)
2. Select one corner edge
3. Press **E** to erase it
4. Press **A** (Arc tool)
5. Click the two endpoints that were connected
6. Pull out slightly
7. Click
8. **You just created a rounded corner!**

---

## Part 2: Modification Tools (Changing Geometry)

These tools MODIFY what you've created.

---

### 🔼 PUSH/PULL TOOL (P)

**The signature SketchUp tool. This is the magic.**

#### What It Does:
- Makes flat faces into 3D objects
- Extrudes faces
- Creates depth

#### The Revolutionary Concept:

**Traditional 3D software:**
- Complex commands
- Extrude along vectors
- Math and coordinates

**SketchUp:**
- Click face
- Push/pull
- Done!

#### How to Use:

1. Press **P**
2. Click any face
3. Move mouse (watch it extrude!)
4. Click to set
5. Or type distance + Enter

#### Push/Pull Magic Tricks:

**Trick #1: Push Through**
- Select a face
- Push/Pull through the entire object
- Face deletes itself!
- **Use:** Creating doors/windows

**Trick #2: Auto-Fold**
- Push/Pull a face
- Hold **ALT/Option**
- Edges on sides won't connect
- Creates separate geometry

**Trick #3: Multiply**
- Push/Pull once
- Type distance
- Hit Enter
- Type new distance
- Hit Enter again
- Previous one changes!

#### Push/Pull Exercise:

**Task:** Create a house shape

1. Draw rectangle: `6000,4000`
2. Push/Pull up: `3000` (walls)
3. Draw triangle on front face (roof shape)
4. Select the face below triangle
5. Delete it (face only, not edges)
6. Select all edges of triangle and sides
7. Press **F** to create faces
8. You have a pitched roof!

---

### ↔️ MOVE TOOL (M)

**Repositioning and copying.**

#### What It Does:
- Moves objects
- Copies objects (with Ctrl/Cmd)
- Stretches edges

#### How to Use:

**Moving:**
1. Press **M**
2. Click on object (pick-up point)
3. Move to destination
4. Click to place

**Copying:**
1. Press **M**
2. Click object
3. Press **Ctrl** (Windows) or **Option** (Mac)
4. See a "+" appear
5. Move to destination
6. Click to place
7. Original stays, copy created!

#### Multi-Copy (Array):

**Linear array:**
1. Move + Copy (with Ctrl/Cmd)
2. Place first copy
3. Type `*10` + Enter
4. Creates 10 total copies, evenly spaced!

**Divide spacing:**
1. Move + Copy
2. Place copy
3. Type `*10/` + Enter
4. Creates 10 copies BETWEEN original and first copy!

#### Move Tool Exercise:

**Task:** Create a fence

1. Create a post: Rectangle → Push/Pull
2. Move + Copy (Ctrl/Cmd): `1000` (1m spacing)
3. Type `*15` + Enter
4. Instant fence with 15 posts!

---

### 🔄 ROTATE TOOL (Q)

**Spinning objects around a point.**

#### What It Does:
- Rotates geometry
- Copies while rotating
- Creates circular arrays

#### How to Use:

1. Press **Q**
2. Click center of rotation
3. Click start reference point
4. Move mouse (see rotation)
5. Click to set angle
6. Or type degree: `45` for 45°

#### The Protractor:

When you activate Rotate:
- A circular protractor appears
- Shows angle as you move
- Snaps to common angles (0°, 90°, 180°)

#### Rotate + Copy (Circular Array):

**Create a wheel:**
1. Create one spoke shape
2. Rotate tool (Q)
3. Click center
4. Press **Ctrl/Cmd** (copy mode)
5. Click spoke edge
6. Rotate slightly
7. Click to place first copy
8. Type `*8` + Enter
9. 8-spoke wheel!

---

### 📏 SCALE TOOL (S)

**Resizing objects.**

#### What It Does:
- Makes things bigger/smaller
- Can scale uniformly or on one axis
- Stretches geometry

#### How to Use:

1. Select object
2. Press **S**
3. Green handles appear
4. Click and drag any handle
5. Object scales

#### Scale Types:

**Corner handles** (diagonal): Scale proportionally  
**Edge handles** (on edges): Scale in 2 directions  
**Face handles** (on faces): Scale in 1 direction only

#### Scale by Number:

1. Select object
2. Press **S**
3. Start scaling
4. Type:
   - `2` = double size
   - `0.5` = half size
   - `1.5` = 150% size

#### Scale Exercise:

1. Create a 1m cube
2. Scale to 2m: Type `2`
3. Scale only height: Use top face handle, type `3`
4. Now you have a tall box!

---

### 📐 OFFSET TOOL (F)

**Creates parallel edges.**

#### What It Does:
- Creates face inside/outside another face
- Perfect for creating wall thickness
- Maintains parallel edges

#### How to Use:

1. Press **F**
2. Click on a face
3. Move mouse in or out
4. Click to set distance
5. Or type distance + Enter

#### Offset Exercise - Wall Thickness:

**Task:** Create a room with wall thickness

1. Draw large rectangle: `5000,4000` (outside)
2. Press **F** (Offset)
3. Click the face
4. Move mouse INWARD
5. Type `200` (200mm wall thickness)
6. Enter
7. Select inner face
8. Delete it
9. Push/Pull the frame up
10. You have walls with thickness!

---

### 🗑️ ERASER TOOL (E)

**Deleting edges and softening lines.**

#### What It Does:
- Deletes edges
- Softens/smooths edges (Shift + click)
- Hides edges (Ctrl/Cmd + click)

#### How to Use:

**Delete edges:**
1. Press **E**
2. Click any edge
3. It's gone!

**Smooth edges:**
1. Press **E**
2. Hold **Shift**
3. Click edge
4. Edge softens (looks smooth)

**Speed erasing:**
1. Press **E**
2. Click and drag across multiple edges
3. They all delete!

#### Eraser Exercise:

**Task:** Make a cylinder look smooth

1. Create circle: `500` radius
2. Push/Pull up: `1000`
3. See the faceted edges?
4. Press **E**
5. Hold **Shift**
6. Click-drag around all vertical edges
7. They smooth out!
8. Looks like a smooth cylinder!

**💡 Why this works:** The edges are still there, just hidden. This is how SketchUp makes curves look smooth!

---

## Part 3: Measurement & Utility Tools

---

### 📏 TAPE MEASURE TOOL (T)

**Precision is what separates amateurs from pros.**

#### What It Does:
- Measures distances
- Creates guide lines
- Resizes entire models

#### How to Use:

**Measuring:**
1. Press **T**
2. Click first point
3. Click second point
4. Look at Measurements Box - shows distance!

**Creating Guides:**
1. Press **T**
2. Click on an edge or face
3. Move away
4. Type distance + Enter
5. Guide line created!
6. **Guides don't print** - they're helpers!

**Guides are your blueprint!**

#### Tape Measure Exercise:

**Task:** Create a window opening guide

1. Create a wall (rectangle pushed up)
2. Press **T**
3. Click bottom edge
4. Move up
5. Type `900` (900mm from floor)
6. Enter - horizontal guide created!
7. Click left edge
8. Move right
9. Type `1000` 
10. Vertical guide created!
11. Use these guides to draw window precisely!

**Delete guides:** Edit → Delete Guides

---

### 🎨 PAINT BUCKET TOOL (B)

**Adding colors and materials.**

#### What It Does:
- Applies colors to faces
- Applies textures (wood, brick, etc.)
- Samples existing materials

#### How to Use:

1. Press **B**
2. Materials panel opens
3. Click a color/material
4. Click on any face
5. Face gets that material!

#### Material Browser:

**Collections:**
- Colors
- Wood
- Brick and Cladding
- Metal
- Roofing
- Vegetation
- Water
- etc.

#### Sampling (Eye Dropper):

1. Paint Bucket active
2. Hold **Alt/Option**
3. Click any face
4. That material is now selected!
5. Apply it elsewhere

**We'll deep-dive into materials in Module 6!**

---

## Part 4: Tool Combinations (The Real Power)

Individual tools are good. Combined? Unstoppable.

### Combination 1: Rectangle + Push/Pull + Offset = Building

```
1. Rectangle (R): 8000,6000 (floor)
2. Offset (F): 300 (wall thickness)
3. Delete inner face
4. Push/Pull (P): 3000 (walls height)
5. You have a building shell!
```

**Time:** 30 seconds with practice

---

### Combination 2: Circle + Push/Pull + Eraser = Column

```
1. Circle (C): 200 radius, 24s
2. Push/Pull (P): 2400 (column height)
3. Eraser (E) + Shift: Smooth all edges
4. Professional column!
```

**Time:** 20 seconds

---

### Combination 3: Rectangle + Push/Pull + Tape Measure + Push/Pull = Window

```
1. Create wall
2. Tape Measure (T): Create guides for window position
3. Rectangle (R): Draw window outline on guides
4. Push/Pull (P): Push window back into wall
5. Push/Pull again: Push window THROUGH wall
6. Window opening created!
```

---

### Combination 4: Line + Arc + Push/Pull = Arch

```
1. Line (L): Draw two vertical lines
2. Line: Connect tops
3. Arc (A): Arc between bottom points
4. Face forms
5. Push/Pull (P): Extrude it
6. You have an arch!
```

---

## Part 5: Advanced Techniques

### Inferencing Mastery

**SketchUp's secret power: It reads your mind!**

#### Key Inference Points:

**Hover-lock technique:**
1. Start drawing
2. Hover over a point (don't click)
3. Move away
4. SketchUp remembers that alignment!
5. A dotted line shows the reference

**Example:**
```
You want to draw a line at the same height as a corner:
1. Line tool (L)
2. Hover over the corner point (don't click)
3. Move to where you want to start
4. See the dotted blue line? That's the height reference!
5. Click when aligned
```

---

### The Follow Me Tool (F)

**Advanced but powerful!**

#### What It Does:
- Extrudes a face along a path
- Creates complex shapes
- Makes pipes, molding, curved shapes

#### How to Use:

1. Draw a path (could be a circle, line, arc, etc.)
2. Draw a face at one end
3. Select the path
4. Tools → Follow Me (or press F)
5. Click the face
6. The face extrudes along the entire path!

#### Follow Me Exercise - Create Pipe:

```
1. Circle (C): 50mm radius (pipe width)
2. Line (L): Draw a path (any shape)
3. Select the entire path
4. Follow Me tool
5. Click the circle face
6. Instant pipe along any path!
```

---

## Part 6: Precision Techniques

### The Measurements Box Power-User Guide

**Never click in the box! Just type!**

#### During Tool Use:

**Absolute measurements:**
- Type number + Enter: Sets exact size
- `1000` = 1000mm
- `1m` = 1 meter (auto-converts)
- `3'6"` = 3 feet 6 inches

**Relative measurements:**
- Type after creating: Changes last action
- Can type multiple times
- Each entry changes the previous action

#### Example Session:

```
Rectangle tool:
- Click once
- Type "1000,500" → 1000×500mm rectangle
- Type "2000,500" → Changes to 2000×500mm
- Type "2000,1000" → Changes to 2000×1000mm
(Trying different sizes without redrawing!)
```

---

### Lock Inference (SHIFT)

**Most underused pro technique!**

**Any time you see a colored line:**
1. Hold **SHIFT**
2. That direction locks
3. You can now type precise measurement
4. Or move mouse freely, stays locked

**Use constantly for:**
- Straight lines
- Vertical movements
- Aligned edges

---

## Part 7: Common Tool Mistakes

### Mistake #1: Fighting Inference

**Symptom:** Can't get edge where you want it

**Problem:** Trying to force it instead of using inference

**Fix:** Trust the inference system
- Look for colored lines
- Wait for snap points
- Lock with Shift when you see the right direction

---

### Mistake #2: Imprecise Measurements

**Symptom:** "Close enough" modeling

**Problem:** Clicking visually instead of typing measurements

**Fix:** ALWAYS type dimensions for anything that matters
- Professional work requires precision
- "Close enough" compounds into huge errors
- Type measurements, don't eyeball!

---

### Mistake #3: Wrong Tool Selection

**Symptom:** Frustrated because tool won't work

**Problem:** Using wrong tool for the task

**Fix:** Remember:
- Drawing new? Line, Rectangle, Circle, Arc
- Modifying existing? Move, Rotate, Scale, Push/Pull
- Measuring? Tape Measure
- Coloring? Paint Bucket

---

### Mistake #4: Not Using Keyboard Shortcuts

**Symptom:** Constantly clicking toolbars (slow!)

**Problem:** Using mouse for tool selection

**Fix:** Learn shortcuts!
- L, R, C, P, M, E, T, B
- Practice 10 minutes daily
- In 1 week, muscle memory kicks in

---

## Part 8: Practice Projects

Time to combine everything!

### Project 1: Simple Table

**Skills used:** Rectangle, Push/Pull, Move+Copy

**Steps:**
1. Rectangle: `1000,600` (top)
2. Push/Pull: `30` (thickness)
3. Create one leg: Rectangle `60,60`, Push/Pull down `700`
4. Position at corner
5. Move+Copy to other corners (use inference!)

**Time goal:** 5 minutes

---

### Project 2: Door Frame

**Skills used:** Rectangle, Offset, Push/Pull, Tape Measure

**Steps:**
1. Rectangle: `900,2100` (door size)
2. Offset: `100` (frame width)
3. Delete inner face
4. Push/Pull: `150` (frame depth)

**Time goal:** 3 minutes

---

### Project 3: Column with Base and Cap

**Skills used:** Circle, Push/Pull, Scale, Offset

**Steps:**
1. Circle: `300` radius
2. Push/Pull: `100` (base)
3. Offset top: `-20` (smaller)
4. Push/Pull: `2000` (column)
5. Offset top: `20` (larger)
6. Push/Pull: `100` (cap)

**Time goal:** 4 minutes

---

## 🎯 Module 3 Success Checklist

**Tool Mastery:**
- [ ] I can draw precise lines using inference
- [ ] I create rectangles by typing dimensions
- [ ] I understand circle segments
- [ ] I've created arcs and curves
- [ ] Push/Pull feels natural
- [ ] I can Move and Copy objects
- [ ] I've created arrays with multiplication
- [ ] Rotate tool makes sense
- [ ] I use Scale for resizing
- [ ] Offset creates parallel edges accurately
- [ ] Eraser deletes and smooths
- [ ] Tape Measure creates guides
- [ ] I apply materials with Paint Bucket

**Technique Mastery:**
- [ ] I use keyboard shortcuts without thinking
- [ ] I type measurements instead of eyeballing
- [ ] I understand and trust inference
- [ ] I use Shift to lock directions
- [ ] I've combined multiple tools

**Speed Test:**
- [ ] Create a 1m cube in under 5 seconds
- [ ] Create a table in under 5 minutes
- [ ] Navigate + model without toolbar clicks

---

## 💡 Key Takeaways

1. **12 tools build everything** - Master these, build anything
2. **Precision is professional** - Always type measurements
3. **Inference is your friend** - Trust the colored lines
4. **Shortcuts are essential** - 10× faster with keyboard
5. **Combination is power** - Tools work together

---

## 🚀 What's Next?

You now have the tools. Time to build something complete!

**Next Module:** [Your First Project: Simple Room →](../04-first-project/README.md)

In Module 4, you'll apply everything you've learned to create a fully-detailed room from scratch. This is where it all comes together!

---

<div align="center">

**🎉 You're now a tool master!**

*You have everything you need to model in 3D.*  
*Now let's build something real!*

</div>

