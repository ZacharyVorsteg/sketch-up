# Module 4: First Project - Simple Room Interior

## 🎯 Your First Complete Project

This is where everything comes together. You'll create a fully-detailed room from scratch, applying every skill you've learned. This isn't just practice—this is portfolio-worthy work.

**Time Required:** 3-4 hours  
**Difficulty:** Intermediate  
**Prerequisites:** Modules 1-3 completed  
**Final Output:** Professional room model ready for presentation

---

## 📖 Project Overview

**What you're building:** A 12' × 10' bedroom with:
- Walls with proper thickness
- Door and window openings
- Hardwood flooring
- Baseboards and crown molding
- A bed with headboard
- Nightstand
- Window with frame
- Ceiling detail

**Why this project?**
- Uses ALL the tools you've learned
- Teaches real-world workflow
- Creates portfolio piece
- Builds confidence for client work
- Introduces professional techniques

---

## 🎓 Learning Objectives

By completing this project, you'll:
- ✅ Understand professional modeling workflow
- ✅ Work with precision and planning
- ✅ Create complex geometry from simple shapes
- ✅ Organize your model properly
- ✅ Apply materials realistically
- ✅ Create presentation-ready views
- ✅ Have your first portfolio piece

---

## Part 1: Planning & Setup (Critical!)

### Why Planning Matters

**Amateur approach:** Start modeling randomly, figure it out as you go  
**Professional approach:** Plan first, model confidently

**Real-world example:**
- Amateur: 4 hours modeling, 2 hours fixing mistakes = 6 hours
- Pro: 15 minutes planning, 2 hours modeling, 15 minutes adjustments = 2.5 hours

**Planning saves 50%+ of your time!**

---

### Step 1: Gather Your Dimensions

**Room specifications:**
- **Room size:** 3600mm × 3000mm (12' × 10')
- **Wall height:** 2400mm (8')
- **Wall thickness:** 150mm (6")
- **Door:** 900mm × 2100mm (36" × 84")
- **Window:** 1200mm × 1200mm (4' × 4')
- **Window sill height:** 900mm (36" from floor)

**Furniture specifications:**
- **Bed:** 2000mm × 1600mm × 500mm high (Queen size)
- **Headboard:** 100mm thick × 1000mm high
- **Nightstand:** 500mm × 400mm × 600mm high

**Write these down!** Refer to them constantly.

---

### Step 2: Set Up Your Model

#### Create a New File:
1. File → New
2. Select template: "Architectural Design - Millimeters"
3. Immediately: File → Save As
4. Name: `Bedroom_Project_[YourName].skp`
5. Location: Your SketchUp_Practice folder

**Why save immediately?**
- Auto-save works from your first manual save
- Prevents "Untitled" file confusion
- Creates backup automatically

#### Verify Units:
1. Window → Model Info
2. Click "Units"
3. Confirm: Millimeters, precision 0.00mm
4. Click "OK"

#### Delete Sang (the person figure):
1. Select tool (Space)
2. Click on the person
3. Delete
4. Cleaner workspace!

---

### Step 3: Set Up Layer 0 (Default)

**Critical concept:** Layer 0 is special in SketchUp.

**Rule:** All raw geometry stays on Layer 0. Always.

**Why?** We'll explain layers deeply in Module 8, but for now:
- Keep everything on Layer 0
- Don't create new layers yet
- This prevents beginners' most common mistake

---

## Part 2: Building the Room Shell

### Step 1: Create the Floor

**Why start with the floor?**
- It's your foundation
- Everything else references it
- Sets the scale for the entire model

**Action:**
1. Press **R** (Rectangle tool)
2. Click on the origin (where red/green axes meet)
3. Type: `3600,3000`
4. Press Enter

**You now have your floor!**

**Pro check:**
- Is the rectangle aligned with axes?
- Is one corner at the origin?
- Does the Measurements Box show 3600,3000?

---

### Step 2: Create Walls with Thickness

**Why wall thickness matters:**
- Realism (walls aren't paper-thin!)
- Proper door/window reveals
- Professional presentation
- Accurate material quantities

**Method 1: Offset (Recommended)**

1. Press **F** (Offset tool)
2. Click your floor rectangle
3. Move mouse INWARD
4. Type: `150` (wall thickness)
5. Press Enter

**You now have two rectangles: outer wall and inner room!**

**Method 2: Double Rectangle (Alternative)**
1. Keep your 3600×3000 rectangle
2. Press **R** (Rectangle)
3. Click the same origin point
4. Type: `3300,2700` (3600-300, 3000-300)
5. Enter

**Why subtract 300?** Wall thickness on both sides: 150mm × 2 = 300mm

---

### Step 3: Create the Wall Faces

Right now you have floor with an outline. Let's make it walls!

**Action:**
1. Select tool (Space)
2. Click on the INNER rectangle face
3. Press Delete

**What happened?**
- The inner floor is gone
- You're left with a "picture frame" floor
- This frame will become your walls!

**Visual:**
```
Before:                After Delete:
┌─────────────┐       ┌─────────────┐
│┌───────────┐│       │             │  ← This is now a
││   INNER   ││       │  [  WALL  ] │     face that will
││   FLOOR   ││  →    │  [ FRAME  ] │     become walls!
│└───────────┘│       │             │
└─────────────┘       └─────────────┘
```

---

### Step 4: Extrude the Walls

**Now for the magic - Push/Pull!**

1. Press **P** (Push/Pull)
2. Click on the wall frame face
3. Move mouse UP (watch for blue axis!)
4. Type: `2400` (wall height)
5. Press Enter

**🎉 YOU HAVE WALLS!**

**Orbit around your room (middle mouse drag)**
- See the walls from outside
- Look inside the room
- Notice the wall thickness?

**Pro tip:** Press **Z** to see the whole room perfectly framed!

---

### Step 5: Create the Floor Inside

**Problem:** You deleted the interior floor. Let's recreate it!

**Method 1: Trace (Simple way)**
1. Press **L** (Line tool)
2. Trace along the inner bottom edges
3. When you complete the rectangle, a face appears!

**Method 2: Find Faces (Faster way)**
1. Right-click inside the room (on the ground edges)
2. Look for faces
3. If edges form a loop, SketchUp creates a face!

**If no face appears:**
- Your edges aren't connected
- Zoom in close (there might be tiny gaps)
- Use Line tool to close any gaps

---

## Part 3: Adding the Door

### Why Doors First?

**Professional workflow order:**
1. Shell (walls, floor, ceiling)
2. Openings (doors, windows)
3. Details (trim, molding)
4. Furniture
5. Materials

**Why?** Each step depends on the previous being correct!

---

### Step 1: Position the Door with Guides

**Using Tape Measure for precision:**

1. Press **T** (Tape Measure)
2. Click the left interior wall edge (at floor level)
3. Move right along the wall
4. Type: `600` (offset from corner)
5. Press Enter
6. **First guide line created!**

7. Still in Tape Measure
8. Click that guide line
9. Move right
10. Type: `900` (door width)
11. Press Enter
12. **Second guide line created!**

**Now position the door height:**

13. Tape Measure tool
14. Click the floor
15. Move up
16. Type: `2100` (door height)
17. Enter
18. **Horizontal guide at door height!**

**You now have a perfect door outline in guides!**

---

### Step 2: Draw the Door Opening

1. Press **R** (Rectangle tool)
2. Click where the left vertical guide meets the floor
3. Move to where the right vertical guide meets the horizontal guide
4. Click (or type `900,2100`)

**You should see a rectangle on your wall face!**

**If you don't see it:**
- Orbit to view the wall straight-on
- Zoom in close
- Make sure you're clicking the wall face, not empty space

---

### Step 3: Create the Door Opening

**Here's the magic trick:**

1. Press **P** (Push/Pull)
2. Click on the door rectangle face
3. Move your mouse BACKWARD (into the wall)
4. **Keep going past the wall thickness!**
5. Click when you're clearly through

**What just happened?**
- The door face pushed through the wall
- SketchUp automatically deleted it
- You have a perfect opening!

**Why this works:**
- Push/Pull through a face = face deletes
- Edges remain, creating the opening
- This is the professional technique!

---

### Step 4: Add Door Frame Thickness

**Right now the opening is just a hole. Let's add a frame!**

1. Press **F** (Offset tool)
2. Click on any edge of the door opening
3. The opening edges highlight
4. Move mouse INWARD
5. Type: `50` (frame width)
6. Enter

**Now you have door frame edges!**

7. Press **P** (Push/Pull)
8. Click the frame strip
9. Pull it out
10. Type: `20` (frame depth)
11. Enter

**Professional door frame complete!**

---

### Step 5: Clean Up Guides

**Guides were helpers, now they're clutter.**

1. Edit → Delete Guides

**Screen is clean again!**

**Pro tip:** Delete guides after each major step, not at the end!

---

## Part 4: Adding the Window

### Step 1: Position Window with Guides

**Window specifications (from our plan):**
- Width: 1200mm
- Height: 1200mm
- Sill height: 900mm from floor
- Centered on back wall

**Find center of wall:**
1. Press **T** (Tape Measure)
2. Click left edge of back wall
3. Type: `1500` (3000mm ÷ 2 = centered)
4. Enter - guide at wall center!

**Window width guides:**
5. Click that center guide
6. Move left
7. Type: `600` (half of 1200mm window)
8. Enter

9. Click center guide again
10. Move right
11. Type: `600`
12. Enter

**Now you have left edge, center, and right edge of window!**

**Window height guides:**
13. Click floor
14. Move up
15. Type: `900` (sill height)
16. Enter

17. Click that guide
18. Move up
19. Type: `1200` (window height)
20. Enter

**Perfect window outline in guides!**

---

### Step 2: Draw and Create Window Opening

1. Press **R** (Rectangle)
2. Click bottom-left guide intersection
3. Click top-right guide intersection
4. Window rectangle on wall!

5. Press **P** (Push/Pull)
6. Click window rectangle
7. Push backward through the wall
8. Click when through

**Window opening complete!**

9. Edit → Delete Guides

---

### Step 3: Add Window Frame and Sill

**Window frame (same as door):**
1. Press **F** (Offset)
2. Click window opening edge
3. Type: `50`
4. Enter

5. Press **P** (Push/Pull)
6. Click frame strip
7. Type: `20`
8. Enter

**Window sill (the ledge):**
1. Select bottom edge of window (inside)
2. Press **F** (Offset)
3. Offset downward
4. Type: `30` (sill depth)
5. Enter

6. Press **P** (Push/Pull)
7. Pull outward into room
8. Type: `150` (sill sticks out)
9. Enter

**Realistic window complete!**

---

## Part 5: Interior Details

### Why Details Matter

**The difference between amateur and pro:**
- Amateur: Box room, basic furniture
- Pro: Baseboards, crown molding, details

**Details sell the realism!**

---

### Step 1: Add Baseboards

**What are baseboards?**
- Trim where walls meet floor
- Covers gap/transition
- Standard in all rooms
- 75-100mm tall typically

**Creating baseboard profile:**

1. Press **L** (Line tool)
2. Click bottom corner of wall (inside room)
3. Move up along wall
4. Type: `100` (baseboard height)
5. Enter

6. Still in Line tool
7. From that point, move outward into room
8. Type: `15` (baseboard thickness)
9. Enter

10. Draw down to floor: `100`
11. Close the loop back to start

**You should have a small rectangle profile!**

**Extrude around room:**

12. Select all four walls (inside edge at floor)
13. Tools → Follow Me
14. Click your baseboard profile face

**Baseboards all around the room!**

**Why Follow Me?**
- Extrudes a shape along a path
- Perfect for trim, molding, pipes
- One of SketchUp's most powerful tools

---

### Step 2: Add Crown Molding (Optional)

**Same concept, at ceiling:**

1. Create small profile at ceiling (50mm down, 15mm out)
2. Select top interior edges
3. Follow Me
4. Click profile

**Professional ceiling detail!**

---

## Part 6: Adding Furniture

### Furniture Philosophy

**Real-world workflow:**
1. Built-in elements first (cabinets, closets)
2. Large furniture (bed, desk)
3. Small furniture (nightstand, chair)
4. Accessories (lamp, books)

**Why this order?** Large items determine layout. Details fill in.

---

### Step 1: Create the Bed

**Bed base:**

1. Press **R** (Rectangle)
2. Click on the floor
3. Type: `2000,1600` (Queen bed)
4. Enter

5. Press **P** (Push/Pull)
6. Click bed rectangle
7. Type: `500` (mattress height)
8. Enter

**Position the bed:**

9. Press **M** (Move tool)
10. Click center of bed (inference!)
11. Move into room
12. Position centered on back wall, away from wall about 100mm
13. Click to place

---

### Step 2: Add Headboard

**Creating headboard:**

1. Press **R** (Rectangle)
2. Draw on back wall: `1600,1000` (wide × tall)
3. Position above bed height

4. Press **P** (Push/Pull)
5. Click headboard face
6. Pull outward
7. Type: `100` (thickness)
8. Enter

**Pro tip:** Headboard should be wider than bed and extend above mattress.

---

### Step 3: Create Nightstand

**Nightstand body:**

1. Press **R**
2. On floor: `500,400`
3. Enter

4. Press **P**
5. Type: `600` (height)
6. Enter

**Add drawer detail:**

1. Press **R** on front face
2. Draw smaller rectangle (leaving margin)
3. Press **P**
4. Push in: `20` (recessed drawer look)

**Position nightstand:**

5. Press **M** (Move)
6. Position next to bed
7. About 50mm gap from bed

---

## Part 7: Applying Materials

### Why Materials Matter

**Wireframe model:** Shows skill  
**Textured model:** Shows vision

**Clients don't buy geometry. They buy the final vision!**

---

### Step 1: Prepare Materials Panel

1. Press **B** (Paint Bucket)
2. Materials panel opens
3. Click "Colors" dropdown
4. Explore collections:
   - Wood
   - Brick and Cladding
   - Colors
   - Carpet and Textiles

---

### Step 2: Apply Floor Material

**Choosing wood flooring:**

1. Materials panel
2. Select "Wood" collection
3. Choose "Wood_Floor_Light" or similar
4. Click your floor face

**Adjusting texture scale:**

1. Right-click floor
2. "Texture → Position"
3. Pins appear
4. Right-click again
5. "Fixed Pins"
6. Drag corners to scale properly
7. Typical: 100mm wide boards
8. Hit Enter when done

**Why scale matters:** 10-foot wide wood boards look fake!

---

### Step 3: Paint Walls

1. Materials → Colors
2. Choose off-white or light gray
3. Click each wall face (inside)

**Pro tip:** Real walls aren't pure white! Subtle color adds realism.

---

### Step 4: Material Furniture

**Bed frame and headboard:**
- Wood material (darker)
- Click each face

**Mattress/bedding:**
- Carpet and Textiles
- Neutral fabric

**Nightstand:**
- Match headboard wood
- Or contrasting finish

---

### Step 5: Material Details

**Baseboards and trim:**
- Usually painted white
- Colors → White (slight cream tint)

**Window frame:**
- Match baseboards
- Or wood stain

**Ceiling:**
- White or off-white
- Slightly different from walls

---

## Part 8: Creating Presentation Views

### Why Views Matter

**Your model is complete. Now make it presentable!**

**Amateur mistake:** Just showing random angle  
**Professional:** Curated views that tell a story

---

### Step 1: The Hero Shot (Perspective View)

1. Orbit to see into room (from corner)
2. Position to see bed, window, most of room
3. Adjust zoom to frame nicely
4. Window → Scenes
5. Click "+" button
6. Name: "Hero View"
7. Click "Add"

**This saves your exact camera position!**

---

### Step 2: The Floor Plan View

1. Camera → Standard Views → Top
2. Camera → Parallel Projection (check on)
3. Zoom to fit room perfectly
4. Window → Scenes
5. Add scene: "Floor Plan"

**Why parallel projection?** Technical accuracy, no perspective distortion.

---

### Step 3: The Eye-Level Walk-In View

1. Tools → Position Camera
2. Click inside room near door
3. Click to look into room
4. Type: `1700` (eye height)
5. Enter
6. Add scene: "Entry View"

**This is how a person sees the room!**

---

### Step 4: Detail Shots

Create 2-3 close-up scenes:
- Scene: "Bed Detail"
- Scene: "Window Detail"
- Scene: "Corner Vignette"

**Why?** Shows craftsmanship and detail work.

---

## Part 9: Organization & Groups

### Why Organization Matters

**Current state:** Everything is "sticky geometry"  
**Problem:** Moving bed moves floor!  
**Solution:** Groups and Components

---

### Making Groups

**Bed as a group:**
1. Select entire bed (triple-click)
2. Right-click
3. "Make Group"
4. Bed is now one object!

**Nightstand as a group:**
1. Select all nightstand parts
2. Make Group

**Why groups?**
- Objects move independently
- Can't accidentally modify
- Organize complexity
- Professional workflow

**Rule of thumb:** If it's a distinct object, make it a group!

---

## Part 10: Final Polish

### Step 1: Turn on Shadows

1. View → Shadows (check on)
2. Window → Shadows panel
3. Adjust time and date sliders
4. See dramatic difference!

**Why shadows?** Adds depth, realism, drama.

---

### Step 2: Adjust Styles

1. Window → Styles
2. Select tab
3. Try different styles:
   - Shaded with Textures (default)
   - Sketchy Edges (hand-drawn look)
   - X-ray (see through objects)

**For final presentation:** Shaded with Textures

---

### Step 3: Hide Construction Geometry

**If you have stray edges or guides:**

1. View → Hidden Geometry (check on temporarily)
2. See everything including hidden
3. Select unwanted geometry
4. Right-click → Hide
5. View → Hidden Geometry (uncheck)

---

## Part 11: Export and Share

### Exporting Images

**For portfolio, presentations, or clients:**

1. Navigate to your Hero View scene
2. File → Export → 2D Graphic
3. Choose format:
   - PNG (best quality, transparency)
   - JPG (smaller file, no transparency)
4. Set resolution: 4000px width (high quality)
5. Name: `Bedroom_Hero_View.png`
6. Save

**Export each scene you created!**

---

### Exporting the Model

**For client review or collaboration:**

1. File → Export → 3D Model
2. Formats:
   - DWG (for AutoCAD)
   - OBJ (for other 3D software)
   - STL (for 3D printing)
   - PDF (for presentations)

---

## 🎯 Project Completion Checklist

**Structure:**
- [ ] Room is 3600mm × 3000mm × 2400mm high
- [ ] Walls have 150mm thickness
- [ ] Door opening is positioned and sized correctly
- [ ] Window opening is positioned and sized correctly
- [ ] Floor exists inside room
- [ ] All geometry is connected (no gaps)

**Details:**
- [ ] Baseboards around all walls
- [ ] Door frame with depth
- [ ] Window frame and sill
- [ ] Crown molding (optional)

**Furniture:**
- [ ] Bed (2000 × 1600mm) positioned properly
- [ ] Headboard attached to bed
- [ ] Nightstand placed beside bed
- [ ] All furniture grouped separately

**Materials:**
- [ ] Floor has wood texture (scaled properly)
- [ ] Walls painted
- [ ] Furniture has appropriate materials
- [ ] Trim/frames colored
- [ ] Ceiling finished

**Presentation:**
- [ ] Created Hero View scene
- [ ] Created Floor Plan scene
- [ ] Created Eye-Level scene
- [ ] Created 2-3 detail scenes
- [ ] Shadows enabled and adjusted
- [ ] Exported high-res images

**Organization:**
- [ ] Furniture items are grouped
- [ ] File is saved with clear name
- [ ] No stray edges or guides
- [ ] Model is clean and organized

---

## 💡 What You Learned (The Deeper Why)

### Workflow Principles

**1. Planning Before Modeling**
- **Why:** Prevents mistakes, saves time
- **How:** Written dimensions, sketches
- **Result:** Confident, efficient modeling

**2. Foundation to Details**
- **Why:** Each step builds on previous
- **How:** Shell → Openings → Details → Furniture → Materials
- **Result:** Logical, organized process

**3. Precision Over Speed**
- **Why:** Accuracy compounds into quality
- **How:** Type measurements, use guides
- **Result:** Professional-grade work

**4. Organization as You Go**
- **Why:** Complexity becomes unmanageable otherwise
- **How:** Groups, scenes, layer discipline
- **Result:** Editable, presentable models

---

### Technical Concepts

**1. Why Wall Thickness?**
- **Technical:** Real walls have depth
- **Visual:** Creates reveals at openings
- **Professional:** Clients notice details

**2. Why Push/Pull Through Creates Openings?**
- **SketchUp Logic:** Coplanar faces delete
- **Efficiency:** No manual face deletion
- **Result:** Clean openings automatically

**3. Why Use Guides?**
- **Precision:** Exact positioning
- **Speed:** Click-snap instead of measuring
- **Professional:** Industry standard

**4. Why Group Objects?**
- **Technical:** Prevents sticky geometry
- **Workflow:** Move objects independently
- **Scale:** Manage complexity

---

### Design Principles

**1. Scale and Proportion**
- Furniture sized correctly for room
- Door/window heights standard
- Human scale maintained

**2. Material Realism**
- Texture scale matters
- Color choices affect mood
- Details create believability

**3. Composition**
- Focal points (bed, window)
- Balance and symmetry
- View angles matter

---

## 🚀 What's Next?

**Congratulations!** You just created a professional-quality room model!

**You now know:**
- Complete project workflow
- All essential tools in context
- Professional techniques
- How to present work

**This is portfolio-ready work!**

---

### Optional Challenges (Extend This Project)

**Level 1 (Easy):**
- Add a ceiling light fixture
- Add a rug under the bed
- Add artwork on walls
- Add a doorknob to door

**Level 2 (Medium):**
- Add a closet with doors
- Create a dresser with drawers
- Add window curtains
- Model a ceiling fan

**Level 3 (Advanced):**
- Add outlets and switches
- Create detailed door panels
- Model complete bed (frame, legs, details)
- Add room lighting (lamps)

---

**Next Module:** [Advanced Modeling Techniques →](../05-advanced-modeling/README.md)

In Module 5, we'll take your skills further with groups, components, complex shapes, and professional modeling workflows.

---

<div align="center">

**🎉 You're no longer a beginner!**

*You just completed your first real project.*  
*This is what separates learners from doers.*  
*You DID it!*

**Time to master advanced techniques →**

</div>

