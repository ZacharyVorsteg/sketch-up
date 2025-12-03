# Module 7: Second Project - Modern Kitchen Design

## Your Portfolio Showpiece

A kitchen is one of the most valuable rooms to model. It combines cabinetry, appliances, materials, and detail work. This project demonstrates professional-level skills.

**Time Required:** 4-6 hours  
**Difficulty:** Intermediate/Advanced  
**Prerequisites:** Modules 1-6 completed  
**Client Value:** $500-1500 project

---

## 📖 Project Overview

**What you're building:**
- 10' × 12' modern kitchen
- Base cabinets with countertops
- Wall cabinets
- Appliances (range, refrigerator, dishwasher)
- Sink and faucet
- Backsplash tile
- Hardware (handles, knobs)
- Lighting fixtures

**Why this project:**
- Extremely common client request
- Shows advanced modeling skills
- Requires precision and planning
- Demonstrates material mastery
- True portfolio piece
- Real commercial value

---

## Part 1: Professional Planning

### Client Brief (Simulated)

**Specifications:**
- **Room:** 3000mm × 3600mm (10' × 12')
- **Ceiling height:** 2400mm
- **Style:** Modern, minimal
- **Color scheme:** White cabinets, walnut accents, black appliances
- **Layout:** L-shaped
- **Must include:** Range, refrigerator, sink, dishwasher
- **Budget:** Mid-range
- **Timeline:** 2 weeks to design

**This is how real projects start!**

---

### Space Planning (Critical!)

**Kitchen design principles:**

**The Work Triangle:**
- Sink, range, refrigerator form triangle
- No side longer than 9' (2700mm)
- No side shorter than 4' (1200mm)
- Efficient movement

**Counter Space Requirements:**
- 15" (380mm) beside range
- 18" (450mm) beside sink
- 15" (380mm) beside refrigerator

**Clearances:**
- 42" (1050mm) walkways
- 48" (1200mm) for appliance opening
- 36" (900mm) minimum workspace

**Professional designers know these standards!**

---

### Cabinet Standards

**Base Cabinets:**
- Height: 900mm (36")
- Depth: 600mm (24")
- Widths: 300, 450, 600, 750, 900mm

**Wall Cabinets:**
- Height: 600-900mm (24-36")
- Depth: 300mm (12")
- Widths: 300, 450, 600, 900mm
- Height above counter: 450mm (18")

**Countertop:**
- Overhang: 25mm front, 0mm back
- Thickness: 38mm (1.5") standard
- Material: Quartz, granite, butcher block

**Knowing standards = professional credibility!**

---

## Part 2: Building the Room Shell

### Step 1: Create the Room

**(You know this from Project 1!)**

1. Rectangle: `3600,3000` (floor)
2. Offset: `150` (walls)
3. Delete inner face
4. Push/Pull: `2400` (walls)
5. Retrace floor inside

**5 minutes = room shell complete!**

---

### Step 2: Add Window

**Kitchen window over sink area:**

1. Tape Measure guides:
   - 1200mm from left wall
   - 1500mm wide
   - 1000mm sill height
   - 1200mm tall

2. Rectangle on wall
3. Push/Pull through
4. Offset for frame: `50`
5. Push/Pull frame: `20`

**Clean, professional window!**

---

## Part 3: Cabinet System (Component-Based)

### Why Component-Based Cabinets?

**Traditional method:** Model each cabinet individually
- Time: 3 hours
- Client wants changes: Redo everything

**Component method:** Create one, duplicate and modify
- Time: 1 hour
- Changes: Edit definition, all update

**This is professional efficiency!**

---

### Step 1: Master Base Cabinet

**Creating the parametric base:**

1. **Box body:**
   - Rectangle: `600,600` (typical cabinet)
   - Push/Pull: `900` (height)
   - Make Component: "Cabinet_Base_600"

2. **Add toe kick:**
   - Edit component
   - Rectangle at bottom: Full width, 100mm tall, 75mm deep
   - Push/Pull recessed
   - This is the toe space!

3. **Add face frame:**
   - Offset front face: `25mm` inward
   - Push/Pull: `15mm` (frame depth)
   - Frame around door opening

4. **Add door:**
   - Rectangle on frame: Leaving margin
   - Offset outward: `19mm` (door thickness)
   - Add handle (small rectangle pull)

**Master base cabinet complete!**

---

### Step 2: Create Cabinet Family

**From one cabinet, create variations:**

**600mm wide (done)**

**450mm wide:**
1. Copy Cabinet_Base_600
2. Right-click → Make Unique
3. Rename: "Cabinet_Base_450"
4. Edit component
5. Select all
6. Scale tool: Scale to 450mm wide
7. Done!

**900mm wide** (same process)

**Sink base** (no back, plumbing access):
1. Copy Cabinet_Base_900
2. Make Unique: "Cabinet_Base_Sink"
3. Edit: Delete back face
4. Add shelf support if needed

**Now you have a cabinet library!**

---

### Step 3: Wall Cabinet Master

**Similar process:**

1. Box: `600w × 300d × 750h`
2. Make Component: "Cabinet_Wall_600"
3. Add face frame
4. Add door (hinged at top or side)
5. Add interior shelf
6. Add hardware

**Create variations:**
- 300mm wide
- 450mm wide
- 900mm wide
- Glass door version

---

## Part 4: Kitchen Layout

### Step 1: Position Base Cabinets

**L-shaped layout:**

**Along back wall (3600mm):**
1. Place "Cabinet_Base_900" (left corner)
2. Move tool + copy
3. Place "Cabinet_Base_Sink" (at window)
4. Place "Cabinet_Base_600" (right side)
5. Check total width fits wall

**Along side wall (3000mm):**
1. Corner cabinet (special 900×900)
2. Two 600mm cabinets
3. One 450mm cabinet

**Use Tape Measure to mark positions first!**

---

### Step 2: Position Wall Cabinets

**Above base cabinets:**

1. Start with base cabinet
2. Copy wall cabinet above
3. Move tool: Move up
4. Type: `1350` (900mm base + 450mm gap)
5. Align horizontally with base cabinets

**Repeat for all base cabinets**

**Professional tip:** Wall cabinets align with base cabinets below!

---

## Part 5: Countertops

### Creating Continuous Countertop

**Method: Draw profile, extrude:**

1. **Top view** (Camera → Standard Views → Top)
2. **Draw countertop outline:**
   - Trace outer edge of base cabinets
   - Offset outward: `25mm` (overhang)
   - Rectangle where no cabinets, spans gaps

3. **Add backsplash edge:**
   - Offset inward at wall: `12mm`
   - This will be backsplash height

4. **Extrude countertop:**
   - Select the shape
   - Push/Pull: `38mm` (counter thickness)

5. **Group countertop**
   - Make Group: "Countertop"

---

### Adding Sink Cutout

**Subtractive method:**

1. Edit countertop group
2. Rectangle where sink goes
3. Typical sink: `800mm × 500mm`
4. Push/Pull down through countertop
5. Delete sink opening face
6. Exit group

**Professional sink cutout!**

---

### Countertop Edge Detail

**Adding edge profile:**

1. Edit countertop group
2. Select front edge
3. Offset downward: `5mm`
4. Push/Pull inward: `10mm`
5. Creates beveled edge!

**Small details = professional quality!**

---

## Part 6: Appliances

### Appliance Strategy

**Don't model from scratch!**
- Time-consuming
- Lower priority
- 3D Warehouse has thousands

**Professional approach:**
1. Find model in 3D Warehouse
2. Download low-poly version
3. Place in kitchen
4. Make sure dimensions correct

---

### Range/Oven

**Requirements:**
- 30" (760mm) or 36" (915mm) wide
- Freestanding or slide-in
- Modern, black

**Finding it:**
1. Window → 3D Warehouse
2. Search: "30 inch black range low poly"
3. Preview results
4. Choose simple, clean model
5. Download
6. Position between cabinets

**Check clearances!**
- 15" counter space on each side (per code)

---

### Refrigerator

**Standard sizes:**
- 30-36" wide (760-915mm)
- 70" (1780mm) tall
- 30" (760mm) deep (or counter-depth: 24")

**3D Warehouse search:** "modern black refrigerator"

**Placement:**
- End of cabinet run (typical)
- Not next to oven (code)
- Swing clearance for door

---

### Dishwasher

**Standard:** 24" (610mm) wide

**Placement:**
- Typically right of sink (for right-handed)
- Close to sink (plumbing)
- Under counter height

**3D Warehouse or model simple box:**
- If modeling: 610mm × 600mm × 900mm
- Add door front matching cabinets
- Handle at top

---

### Sink and Faucet

**Sink:**
- Undermount (typical modern)
- 33" (840mm) single bowl or double
- Stainless steel

**3D Warehouse:** "undermount kitchen sink"

**Position in countertop cutout**

**Faucet:**
- Modern single-handle
- Pulldown spray

**3D Warehouse:** "modern kitchen faucet"

**Position at sink**

---

## Part 7: Backsplash

### Tile Backsplash

**Modern option:** Full-height tile to wall cabinets

**Creating backsplash:**

1. **Draw face on wall:**
   - Rectangle from counter to wall cabinets
   - Extends length of countertop
   - Push/Pull: `12mm` (tile thickness)

2. **Apply tile material:**
   - Materials → Tile
   - Choose subway tile or modern tile
   - Apply to backsplash face

3. **Scale texture correctly:**
   - Right-click → Texture → Position
   - Subway tile: 75mm × 150mm typical
   - Adjust scale to match

4. **Add grout lines (optional advanced):**
   - Plugins for tile patterns
   - Or accept texture's grout lines

---

## Part 8: Hardware and Details

### Cabinet Hardware

**Create one handle as component:**

1. **Simple pull design:**
   - Rectangle: `100mm × 12mm × 12mm`
   - Round corners (optional)
   - Make Component: "Pull_Modern_100mm"

2. **Apply metal material:**
   - Brushed stainless or black

3. **Position on one door:**
   - Typical: Centered, 1/3 from top

4. **Copy to all doors:**
   - Move + copy
   - Or duplicate with array

**Consistent hardware = professional!**

---

### Crown Molding

**On top of wall cabinets:**

1. Draw profile (small trim shape)
2. Select top edges of wall cabinets
3. Follow Me tool
4. Click profile
5. Crown molding around all cabinets!

---

### Lighting

**Undercabinet lighting:**
- 3D Warehouse: "LED strip light"
- Or simple rectangle with light material
- Under wall cabinets

**Pendant lights:**
- 3D Warehouse: "modern pendant light"
- Over island or eating area
- Typically 3 in a row

**Recessed cans:**
- Simple circles on ceiling
- Array in grid pattern
- 4-6 lights typically

---

## Part 9: Materials Application

### Material Strategy

**Professional material palette:**
1. **Cabinets:** White or off-white
2. **Countertop:** White quartz or walnut
3. **Backsplash:** Subway tile or slab
4. **Flooring:** Wood or tile
5. **Walls:** Light gray
6. **Hardware:** Brushed stainless or black

**Cohesive palette = design sophistication!**

---

### Applying Cabinet Materials

**White cabinets:**
1. Select all base cabinets
2. Paint Bucket → Colors → White (warm white, not pure)
3. Apply to groups
4. Or edit each component, paint interior

**Walnut accent:**
- Island cabinets different (feature)
- Open shelving
- Contrasts white

---

### Countertop Material

**White quartz (modern):**
1. Materials → Stone
2. Or create custom: Photo of quartz
3. Apply to countertop
4. No visible texture repeat (subtlety!)

**Butcher block (warmth):**
- Materials → Wood
- Apply to countertop
- Scale appropriately
- Grain runs length

---

### Floor Material

**Wood flooring:**
1. Materials → Wood → Wood_Floor_Light
2. Apply to floor
3. Right-click → Texture → Position
4. Scale: 100-150mm wide planks
5. Grain runs length of room

**Tile flooring:**
1. Materials → Tile
2. Modern: Large format (600×600mm)
3. Traditional: Smaller (300×300mm)
4. Scale correctly!

---

## Part 10: Creating Presentation Views

### Scene 1: Hero Shot

**Wide angle showing whole kitchen:**

1. Orbit to corner view
2. See counters, cabinets, appliances
3. Eye height: 1500mm (standing view)
4. Compose to show design well
5. Window → Scenes → Add Scene
6. Name: "Kitchen - Hero View"

---

### Scene 2: Detail Shot - Sink Area

**Close-up showing detail:**

1. Zoom to sink, faucet, window
2. Shows tile, countertop, hardware
3. Demonstrates craftsmanship
4. Add scene: "Kitchen - Sink Detail"

---

### Scene 3: Elevation Views

**Technical views:**

1. Camera → Standard Views → Front
2. Shows cabinet elevations
3. Add scene: "Kitchen - Front Elevation"

Repeat for each wall

**Why?** Contractors need these for building!

---

### Scene 4: Floor Plan

**Overhead layout:**

1. Top view
2. Parallel projection
3. Shows layout, spacing, clearances
4. Add scene: "Kitchen - Floor Plan"

---

## Part 11: Advanced Presentation

### Enabling Shadows

**Dramatic lighting:**

1. View → Shadows (enable)
2. Window → Shadows panel
3. Set time: 10am or 2pm (nice angles)
4. Adjust intensity
5. See the difference!

**Shadows add depth and realism!**

---

### Style Selection

**For client presentation:**

1. Window → Styles
2. Shaded with Textures (realistic)
3. Or Sketchy Edges (design-phase look)
4. Match project phase

---

### High-Resolution Export

**For portfolio/client:**

1. Navigate to Hero View scene
2. File → Export → 2D Graphic
3. PNG format
4. Options: 4000px wide
5. Anti-alias: On
6. Export

**Repeat for all scenes**

**Professional deliverables!**

---

## 🎯 Project Success Checklist

**Layout:**
- [ ] Kitchen is 3600mm × 3000mm
- [ ] Work triangle is efficient
- [ ] Clearances meet code
- [ ] Layout is logical

**Cabinets:**
- [ ] Base cabinets: 900mm tall, 600mm deep
- [ ] Wall cabinets: 750mm tall, 300mm deep
- [ ] All cabinets are components
- [ ] Variations in cabinet widths
- [ ] Toe kicks on all base cabinets
- [ ] Doors and hardware

**Countertops:**
- [ ] 38mm thick
- [ ] 25mm overhang
- [ ] Continuous, no gaps
- [ ] Sink cutout properly sized
- [ ] Edge detail added

**Appliances:**
- [ ] Range positioned correctly
- [ ] Refrigerator placed logically
- [ ] Dishwasher near sink
- [ ] Sink and faucet installed
- [ ] All appliances scaled correctly

**Details:**
- [ ] Backsplash installed
- [ ] Hardware on all cabinets
- [ ] Crown molding (optional)
- [ ] Lighting fixtures placed
- [ ] Window present

**Materials:**
- [ ] Cabinets painted
- [ ] Countertop material applied and scaled
- [ ] Backsplash tile applied
- [ ] Floor material applied and scaled
- [ ] Hardware has metal material

**Presentation:**
- [ ] Hero view scene created
- [ ] Detail scenes created
- [ ] Elevation views created
- [ ] Floor plan created
- [ ] Shadows enabled
- [ ] High-res images exported

---

## 💡 What You Learned

### Professional Workflow

**1. Component-based modeling**
- Create once, use many times
- Easy to modify
- Client changes are simple
- **This saves hours per project!**

**2. Standard dimensions**
- Knowing industry standards
- Code compliance
- Professional credibility
- Client trust

**3. Space planning**
- Work triangle
- Clearances
- Ergonomics
- Functionality first, aesthetics second

**4. Material coordination**
- Cohesive palette
- Appropriate selections
- Realistic application
- Proper scaling

---

### Business Value

**This project demonstrates:**
- ✅ Professional skill level
- ✅ Industry knowledge
- ✅ Attention to detail
- ✅ Client-ready presentation

**Charge for this work:**
- **Simple kitchen:** $500-800
- **Detailed kitchen:** $800-1200
- **Full remodel design:** $1500-3000

**You now have portfolio work worth thousands!**

---

## 🚀 What's Next?

You've completed two major projects! You're working at a professional level!

**Next Module:** [Layers & Organization →](../08-layers-organization/README.md)

Module 8 teaches advanced file organization, layers, scenes, and managing complex projects—essential for professional work!

---

<div align="center">

**🎉 You just created a professional kitchen design!**

*This is portfolio-worthy, client-ready work.*  
*You're not a student anymore—you're a designer!*

</div>

