# Module 6: Materials & Textures - Creating Photorealism

## Making Your Models Come Alive

Geometry shows skill. Materials sell the vision. This module transforms your technical models into compelling presentations that win clients.

**Time Required:** 2-3 hours  
**Difficulty:** Intermediate  
**Prerequisites:** Modules 1-5 completed

---

## 📖 What You'll Learn

- Material fundamentals
- Texture application and editing
- Creating custom materials
- UV mapping and positioning
- Realistic material properties
- Rendering basics
- Professional presentation techniques

---

## 🎯 The Visual Impact

**Model with no materials:** 20% impressive  
**Model with basic colors:** 50% impressive  
**Model with realistic materials:** 95% impressive

**Clients don't buy geometry. They buy the vision of the final product!**

---

## Part 1: Understanding Materials

### What Is a Material in SketchUp?

**Two components:**
1. **Color** - The base color/hue
2. **Texture** - Optional image that repeats

**Examples:**
- Pure red = color only, no texture
- Wood = color (brown) + texture (wood grain image)
- Concrete = color (gray) + texture (concrete surface)

---

### The Materials Panel

**Opening it:**
- Press **B** (Paint Bucket tool)
- Or Window → Materials

**Panel sections:**
1. **Select tab** - Choose/browse materials
2. **Edit tab** - Modify selected material
3. **Collections dropdown** - Material libraries

---

### Built-In Material Collections

**Colors:**
- Solid colors, no texture
- Quick placeholder materials
- Use for painted surfaces

**Brick and Cladding:**
- Various brick patterns
- Siding options
- Exterior materials

**Carpet and Textiles:**
- Fabric textures
- Carpet patterns
- Upholstery

**Fencing:**
- Chain link
- Wood fencing
- Metal fencing

**Metal:**
- Brushed metals
- Corrugated
- Steel, aluminum

**Roofing:**
- Shingles
- Metal roofing
- Tile

**Stone:**
- Natural stone
- Pavers
- Masonry

**Tile:**
- Floor tiles
- Wall tiles
- Various patterns

**Vegetation:**
- Grass
- Leaves
- Ground cover

**Water:**
- Pool water
- Ocean
- Reflective surfaces

**Wood:**
- Hardwood flooring
- Lumber
- Wood grain finishes

---

## Part 2: Applying Materials

### Basic Application

1. Press **B** (Paint Bucket)
2. Select material from panel
3. Click on a face
4. Face gets that material!

**Simple!** But there's much more...

---

### Material Application Rules

**Rule 1: Materials apply to FACES, not edges**
- Edges remain their color (usually black)
- Faces display materials

**Rule 2: Front face vs Back face**
- Faces have two sides
- Default: front = white, back = blue/gray
- Each side can have different materials!

**Rule 3: Groups/Components**
- Can apply material to entire group (all faces inside)
- OR edit group and apply to individual faces
- Group material = "wrapper" material

---

### The Eyedropper (Sample Material)

**Want to reuse a material already in your model?**

1. Paint Bucket active (**B**)
2. Hold **Alt/Option**
3. Cursor becomes eyedropper
4. Click any face
5. That material is now selected!
6. Release Alt/Option
7. Apply to other faces

**Pro shortcut:** This is faster than searching Materials panel!

---

## Part 3: Texture Positioning & Scaling

### The Texture Problem

**You apply wood flooring. It looks wrong. Why?**

**Problem:** Texture scale doesn't match reality
- Wood boards are 6 feet wide (fake!)
- Pattern repeats obviously
- Looks unprofessional

**Solution:** Texture positioning controls

---

### Accessing Texture Controls

**Method 1: Context menu**
1. Right-click textured face
2. Texture → Position

**Method 2: Paint Bucket**
1. Paint Bucket tool active
2. Hold **Alt/Cmd** (Mac) or **Alt/Ctrl** (Windows)
3. Click textured face

**Pins appear on the texture!**

---

### The Four Texture Pins

**When you enter texture positioning mode, you see 4 pins:**

1. **Red pin (origin)** - Position reference
2. **Green pin** - Controls scale/rotation on one axis
3. **Blue pin** - Controls scale on other axis
4. **Yellow pin** - Controls distortion/shear

---

### Basic Texture Scaling

**Goal:** Make wood floor boards realistic width

1. Right-click floor → Texture → Position
2. Pins appear
3. Right-click again → **"Fixed Pins"** (check this!)
4. Drag green pin to adjust one direction
5. Drag blue pin to adjust other direction
6. Watch the texture scale in real-time
7. Make boards ~100-150mm wide (realistic)
8. Hit Enter when done

**Why "Fixed Pins"?**
- Keeps texture aligned
- Prevents accidental distortion
- Professional results

---

### Texture Rotation

**Sometimes texture is oriented wrong:**

1. Enter texture positioning
2. Drag green pin in circular motion
3. Texture rotates
4. Align with desired direction
5. Enter when done

**Example:** Wood grain should run length of floorboards, not across!

---

### Precise Texture Measurements

**Instead of eyeballing:**

1. Right-click face
2. Entity Info panel opens
3. Shows texture size
4. Type exact dimensions
5. Example: 100,1200 (100mm×1200mm plank)

**This is professional precision!**

---

## Part 4: Creating Custom Materials

### Why Create Custom Materials?

**Built-in materials are limited:**
- Generic textures
- May not match client's actual materials
- Need specific brands/products

**Custom materials = project-specific accuracy**

---

### Creating Material from Color

**Simplest custom material:**

1. Materials panel → Edit tab
2. Click "+" (create material)
3. Name it: "Client_Wall_Blue"
4. Click color swatch
5. Choose color (or enter HEX code)
6. No texture = solid color
7. Click OK

**Now you have a custom color!**

---

### Creating Material from Image

**For realistic custom materials:**

**Step 1: Get the texture image**
- Photograph actual material
- Download from texture sites:
  - textures.com
  - poliigon.com
  - freepbr.com
- Client provides sample

**Image requirements:**
- **Seamless** - edges match for tiling
- **Square** - 512×512, 1024×1024, or 2048×2048 pixels
- **Format** - JPG or PNG
- **Neutral lighting** - not too bright/dark

**Step 2: Create material**
1. Materials panel → Edit tab
2. Click "+" (create)
3. Name: "Client_CustomFlooring"
4. Click texture image icon
5. Browse to your image file
6. Select → Open
7. Adjust color tint if needed
8. OK

**You now have a custom textured material!**

---

### Finding Good Textures Online

**Free resources:**
- **Textures.com** (formerly CGTextures) - 1 free/day
- **Poliigon.com** - Free tier available
- **FreePBR.com** - All free, high quality
- **Unsplash.com** - Search "texture"

**Paid (worth it for professionals):**
- **Textures.com** - $8-15/month
- **Poliigon.com** - Premium textures
- **Quixel Megascans** - AAA quality

**What to download:**
- Diffuse/Albedo map (the main texture)
- Seamless/tileable versions
- At least 1024×1024 resolution

---

## Part 5: Material Properties

### Opacity (Transparency)

**Making materials see-through:**

1. Select material in panel
2. Edit tab
3. **Opacity slider** (0-100%)
4. 0% = fully transparent
5. 100% = fully opaque

**Uses:**
- Glass (10-20% opacity)
- Water (20-40%)
- Frosted glass (40-60%)
- Sheer curtains (30-50%)

**Glass material recipe:**
1. Create new material
2. Color: Light blue tint
3. Opacity: 15%
4. Apply to window glass

---

### Material Texture Size

**In Edit tab:**

**Dimensions fields:**
- Width: texture width
- Height: texture height
- Lock icon: maintain aspect ratio

**Example uses:**
- Brick: 200mm×100mm per brick
- Tile: 300mm×300mm per tile
- Flooring: 100mm×1200mm per board

---

## Part 6: Painting Strategies

### The "Material Per Face" Approach

**Highest control:**
- Edit group/component
- Apply material to each face individually
- Each face can be different

**When to use:**
- Complex models
- Multi-material objects
- Precise control needed

---

### The "Material Per Group" Approach

**Quick method:**
- Apply material to entire group exterior
- All faces inside get that material

**When to use:**
- Quick placeholders
- Simple single-material objects
- Early design phases

**To override:**
- Edit group
- Apply different material to specific faces
- Those faces override group material

---

### Front Face vs Back Face Materials

**Faces have two sides:**

**Checking face orientation:**
- Front faces: white by default
- Back faces: blue/purple by default

**Reversing faces:**
1. Right-click face
2. "Reverse Faces"
3. Flips which side is front

**Why this matters:**
- Some rendering engines only render front faces
- Materials apply differently to front vs back
- Professional models have consistent face orientation

**Best practice:** All exterior faces face outward, all interior faces face inward

---

### Painting Groups of Faces

**Select multiple faces:**
1. Select tool
2. Hold Shift
3. Click faces to add to selection
4. Or click-drag to select multiple

**Apply material to selection:**
1. Multiple faces selected
2. Paint Bucket tool
3. Click any selected face
4. All selected faces get material!

**Huge time saver!**

---

## Part 7: Material Organization

### The "In Model" Collection

**What is it?**
- Every material used in your model
- Auto-populates as you apply materials
- Project-specific palette

**Accessing it:**
- Materials panel
- Collections dropdown
- Select "In Model"

**Why use it?**
- See all materials at a glance
- Quickly reselect materials
- Manage project palette

---

### Purging Unused Materials

**Over time, materials accumulate:**
- Test materials
- Deleted geometry materials
- Unused imports

**Cleaning up:**
1. Window → Model Info
2. Statistics
3. "Purge Unused"
4. Removes unused materials

**Result:** Smaller file size, cleaner model

---

### Creating Material Collections

**For your library:**

1. Create folder: `Documents/SketchUp/Materials/MyMaterials/`
2. Save custom materials as `.skm` files
3. Organize by type
4. In SketchUp: Add collection path
5. Your materials appear in Collections dropdown!

**Professional asset building!**

---

## Part 8: Realistic Materials Guide

### Realistic Wood

**Key properties:**
- Color: Rich browns, not oversaturated
- Grain: Visible but subtle
- Direction: Grain runs logically
- Scale: Appropriate to object

**Good practices:**
- Floor boards: 100-150mm wide
- Wall paneling: 100-200mm boards
- Furniture: Grain follows longest dimension

---

### Realistic Glass

**Recipe:**
- Color: Very light blue or green tint
- Opacity: 10-20%
- On thin faces (not thick blocks)

**Pro tip:** Model glass as thin surface, not thick block

---

### Realistic Fabric

**Key properties:**
- Slight texture
- Matte finish (not shiny)
- Appropriate scale

**Types:**
- Upholstery: Fine weave
- Carpet: Texture visible
- Curtains: Flow and drape

---

### Realistic Metal

**Key properties:**
- High contrast in texture
- Brushed vs polished
- Appropriate color (steel, copper, brass)

**Types:**
- Brushed metal: Directional texture
- Polished: Minimal texture, more reflection
- Rusty: Color variation texture

---

### Realistic Concrete

**Key properties:**
- Slightly varied color (not uniform gray)
- Subtle texture
- Sometimes with imperfections

**Scale:** 
- Smooth concrete: Fine texture
- Rough concrete: Larger aggregate visible

---

## Part 9: Advanced Techniques

### Matching Real-World Materials

**Client says: "Match this exact tile"**

**Process:**
1. Get reference:
   - Photograph
   - Manufacturer spec sheet
   - Physical sample
2. Create custom material from photo
3. Adjust color to match lighting
4. Scale precisely
5. Test in model
6. Show client for approval

**This is professional work!**

---

### Creating Material Variations

**Need 3 wood finishes that coordinate?**

1. Start with one wood material
2. Edit tab → adjust color tint
3. "+" create new material from edited
4. Name: "Wood_Light"
5. Repeat for medium and dark
6. Consistent family of materials

---

### Texture Projection

**For irregular surfaces:**

1. Materials → Edit
2. Check "Use texture image"
3. Apply to face
4. Right-click → Texture → Position
5. Mode: "Projected"
6. Texture projects straight, ignores face shape

**When to use:**
- Curved surfaces
- Terrain/topography
- Irregular geometry

---

## Part 10: Rendering Basics

### What Is Rendering?

**SketchUp view:** Real-time, simplified  
**Rendered view:** Photorealistic, calculated

**Rendering engines (plugins):**
- V-Ray (industry standard, paid)
- Enscape (real-time, paid)
- Lumion (live rendering, paid)
- Twilight Render (affordable)
- SU Podium (SketchUp-specific)

---

### Preparing for Rendering

**Good materials = good renders:**

1. **Apply realistic materials**
   - Not just colors
   - Proper textures
   - Correct scale

2. **Fix face orientation**
   - All front faces correct
   - No reversed faces
   - Check with "Monochrome" style

3. **Add detail**
   - Furniture, accessories
   - Context (surroundings)
   - Human scale references

4. **Set up lighting**
   - Use shadows
   - Position for time of day
   - Consider artificial lights

5. **Choose camera angle**
   - Interesting composition
   - Shows design well
   - Realistic eye height

---

### Using SketchUp's Built-In Display

**While not true "rendering," improve output:**

1. **Enable Shadows**
   - View → Shadows
   - Adjust time/date for best light

2. **Apply Style**
   - Window → Styles
   - Try different looks
   - "Shaded with Textures" for realism

3. **Set Field of View**
   - Natural: 35°
   - Interiors: 45-50° (wider)
   - Details: 25-30° (telephoto)

4. **Export High-Res Image**
   - File → Export → 2D Graphic
   - Set resolution: 4000+ pixels wide
   - PNG for best quality

---

## 🎯 Module 6 Success Checklist

**Understanding:**
- [ ] I understand what materials are
- [ ] I know the difference between color and texture
- [ ] I understand face orientation
- [ ] I know when to use opacity

**Skills:**
- [ ] I can apply materials to faces
- [ ] I can use the eyedropper to sample materials
- [ ] I can position and scale textures
- [ ] I create custom materials from colors
- [ ] I create custom materials from images
- [ ] I adjust material properties
- [ ] I organize materials

**Application:**
- [ ] My materials are scaled realistically
- [ ] Textures are oriented correctly
- [ ] I use appropriate materials for objects
- [ ] Glass looks like glass
- [ ] Wood grain runs logically
- [ ] My models look professional

---

## 💡 Key Takeaways

**1. Materials sell the vision**
- Geometry = skill
- Materials = client decision factor
- Worth the extra time!

**2. Scale matters more than you think**
- Wrong scale = instantly unprofessional
- Right scale = believable realism

**3. Custom materials = project accuracy**
- Generic materials = generic results
- Client-specific = professional service

**4. Organization saves time**
- Material libraries compound value
- Reuse across projects
- Build your asset library

---

## 🚀 What's Next?

Your models now look professional! Time for another complete project!

**Next Module:** [Second Project: Modern Kitchen →](../07-second-project/README.md)

Module 7 applies everything you've learned to create a fully-detailed modern kitchen - a true portfolio showpiece!

---

<div align="center">

**🎉 Your models now look incredible!**

*Materials transform technical work into visual stories.*  
*This is what makes clients choose you!*

</div>

