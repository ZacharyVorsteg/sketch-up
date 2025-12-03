# Module 2: Navigation & Movement Mastery

## Why This Module Matters

Navigation is like breathing—it should be automatic. Clumsy navigation kills creativity and wastes time. Smooth navigation makes you feel like you're *inside* your model.

**Time Required:** 2-3 hours  
**Difficulty:** Beginner  
**Prerequisites:** Module 1 completed

---

## 📖 What You'll Learn

- Master the 3 camera tools (Orbit, Pan, Zoom)
- Navigate without thinking
- Use standard views professionally
- Understand perspective vs parallel projection
- Walk through your models
- Create presentation views

---

## 🎯 Learning Objectives

By the end of this module:
- ✅ You'll navigate as fast as you think
- ✅ Camera control will feel natural
- ✅ You'll understand camera positioning
- ✅ You can quickly jump to any view
- ✅ Navigation won't interrupt your creative flow

---

## Part 1: The Three Core Navigation Tools

These tools don't create geometry—they move YOUR view of the model.

Think of it like this:
- Your model stays still
- YOU (the camera) move around it

---

### 🧐 ORBIT - Rotating Your View

**What it does:** Rotates the camera around your model

**How to activate:**
- Press **O**
- Or click the Orbit icon
- Or click + hold middle mouse button (scroll wheel)

**How to use:**
1. Click and hold (left mouse button)
2. Move mouse in any direction
3. Release when you have the view you want

#### Orbit Practice Exercise:

1. Create a cube (you know how!)
2. Press **O** (or click Orbit tool)
3. Click in the center of screen
4. Move mouse in circles
5. Watch the cube spin!

**Try these motions:**
- Move mouse LEFT → Cube rotates right
- Move mouse UP → View tilts down
- Diagonal movements → Combined rotations
- Fast movements → Fast spins
- Slow movements → Precise positioning

#### 💡 The Orbit Center Point

**Critical concept:** Orbit rotates around the point where you clicked!

**Experiment:**
1. Orbit tool active
2. Click near the top of your cube
3. Notice you orbit around THAT point
4. Try clicking different spots
5. See how the rotation center changes?

**Pro Tip:** Click on the part of the model you want to focus on!

---

### ✋ PAN - Sliding Your View

**What it does:** Slides the camera left/right/up/down (no rotation)

**How to activate:**
- Press **H**
- Or click the Pan icon
- Or hold **Shift + middle mouse button**

**How to use:**
1. Click and hold
2. Drag in any direction
3. Your view slides that direction
4. Release

#### Pan Practice Exercise:

1. With your cube visible
2. Press **H** (Pan tool)
3. Click and drag RIGHT
4. The cube appears to move LEFT
5. (You're actually moving the camera right)

**When to use Pan:**
- Recentering your model in the window
- Looking at different parts without rotating
- Aligning views
- Fine-tuning composition

**Pan vs Orbit:**
- Pan = Slide (no rotation)
- Orbit = Rotate (no sliding)

---

### 🔍 ZOOM - Getting Closer or Further

**What it does:** Moves camera closer/further from model

**How to activate:**
- Scroll wheel (up = closer, down = further)
- Or press **Z** for Zoom Extents
- Or press **Shift + Z** for Zoom Window

**Types of Zoom:**

#### 1. Scroll Zoom (Most Common)
- Scroll up = zoom in
- Scroll down = zoom out
- Smooth and intuitive

#### 2. Zoom Extents (Z key)
- Shows EVERYTHING in your model
- Centers everything in view
- **Use this constantly!**

#### 3. Zoom Window (Shift + Z)
- Click and drag a box
- Zooms to fit exactly that area
- Perfect for detail work

#### Zoom Practice Exercise:

1. Start with cube visible
2. Scroll in until very close
3. Scroll out until very far
4. Press **Z** (Zoom Extents) - cube perfectly framed!
5. Press **Shift + Z**
6. Draw a box around one corner of the cube
7. That corner fills the screen!

---

## Part 2: The Professional Navigation Flow

Here's how professionals actually work:

### The Three-Tool Dance

**You'll constantly cycle through:**
1. **Orbit** - Find the angle
2. **Pan** - Center the focus
3. **Zoom** - Get the right distance

**This becomes muscle memory!**

#### Real-World Example:

*You're modeling a door on a house...*

```
1. ORBIT - Rotate to see the front wall
2. ZOOM IN - Get close to the door area  
3. PAN - Center the door in your view
4. [Work on the door]
5. ORBIT - Check from different angle
6. ZOOM OUT - See the whole house
7. Z - Zoom Extents to see everything
8. [Continue working]
```

**You'll do this sequence hundreds of times per session!**

---

### 🖱️ The Mouse Master Setup

**Pro configuration:**

**Left hand:**
- Rests on keyboard
- Fingers on: Tab, Shift, L, R, C, P, M
- Thumb on Space bar

**Right hand:**
- On mouse
- Index finger on left button (click/draw)
- Middle finger on scroll wheel (orbit/zoom)
- Never leaves the mouse

**The Flow:**
```
Draw line (left click)
→ Orbit (middle mouse drag) 
→ Continue line (left click)
→ Zoom (scroll)
→ Next tool (left hand presses key)
→ Orbit (middle mouse drag)
→ Draw (left click)
```

**No tool switching! Just flowing!**

---

## Part 3: Standard Views

SketchUp has built-in camera positions. Use these for:
- Quick orientation
- Technical drawings
- Client presentations

### Camera Menu Views

**Access:** Camera Menu or toolbar buttons

| View | Shortcut | When to Use |
|------|----------|-------------|
| **Top View** | None | Floor plans, layouts |
| **Bottom View** | None | Ceiling details |
| **Front View** | None | Elevations |
| **Back View** | None | Rear elevations |
| **Left View** | None | Side elevations |
| **Right View** | None | Side elevations |
| **Iso View** | None | Default 3D view |

#### Accessing Standard Views:

1. **Camera → Standard Views → Top**
2. Or use the Views toolbar
3. Or right-click on axis and select

#### Practice Exercise - View Tour:

Create a simple house shape, then:

1. Camera → Standard Views → **Front**
   - *You're looking at the front face*
2. Camera → Standard Views → **Top**
   - *Looking straight down*
3. Camera → Standard Views → **Right**
   - *Side view*
4. Camera → Standard Views → **Iso**
   - *Classic 3D angle*

**Notice:** These are all in parallel projection (we'll cover that next)

---

### 📐 Perspective vs Parallel Projection

**This is important for professional work!**

#### Perspective Projection (Default)
- How your eyes actually see
- Far objects appear smaller
- Has a vanishing point
- **Use for:** Realistic renders, presentations

#### Parallel Projection
- No perspective distortion
- All parallel lines stay parallel
- Technical accuracy
- **Use for:** Measurements, technical drawings, floor plans

**Toggle:** Camera → Parallel Projection (check on/off)

#### Visual Difference:

```
PERSPECTIVE VIEW:          PARALLEL VIEW:
    ╱‾‾╲                     ┌────┐
   │    │ (far, small)       │    │
   │    │                    │    │ (same size)
  ╱│    │╲                   │    │
 │ │    │ │                  │    │
 │ └────┘ │                  └────┘
 └────────┘ (near, large)
```

#### When to Use Each:

**Perspective:**
- Client presentations
- Realistic views
- Interior walk-throughs
- Marketing renders

**Parallel:**
- Dimensioning
- Technical drawings
- Floor plans
- Elevation views
- Construction documents

---

## Part 4: Advanced Navigation Techniques

### Field of View (FOV)

**What it is:** How wide your camera lens sees

**Default:** 35mm (medium)
- Wider = more in frame (fisheye effect)
- Narrower = less in frame (telephoto)

**Change it:**
1. Camera → Field of View
2. Or activate Zoom tool
3. Type a number (e.g., "50") and Enter

**Typical ranges:**
- 30-35° = Natural view
- 45-60° = Wide angle
- 15-25° = Telephoto

**When to adjust:**
- Wide angle: Interiors (see more of the room)
- Telephoto: Details (zoom without distortion)

---

### Walk Tool (First-Person View)

**What it does:** Walk through your model like a video game

**Activate:** Tools → Walk

**How to use:**
1. Click and hold
2. Move mouse forward = walk forward
3. Move mouse left = turn left
4. Move mouse up/down = look up/down
5. Release to stop

**Best for:**
- Interior walk-throughs
- Experiencing scale
- Client presentations

**Set eye height:**
1. Activate Walk tool
2. Type height (e.g., "1700mm" for average person)
3. Press Enter

---

### Look Around Tool

**What it does:** Rotate view without moving position (like turning your head)

**Activate:** Tools → Look Around

**Best for:**
- Checking surroundings from one spot
- Interior views where you can't orbit

---

### Position Camera Tool

**What it does:** Set camera at exact location

**How to use:**
1. Tools → Position Camera
2. Click where you want the camera
3. Click where you want to look

**Pro use:**
- Setting up specific views
- Creating scenes (later module)
- Client presentation angles

---

## Part 5: Navigation Exercises

Time to build muscle memory!

### Exercise 1: The Navigation Dance

**Goal:** Navigate without thinking

1. Create 5-6 random boxes scattered around
2. Practice this sequence 10 times:
   - **Orbit** to see all boxes
   - **Zoom** to one box
   - **Pan** to center it
   - **Orbit** around that box
   - **Zoom Extents** to see all again
   - Repeat with different box

**Time yourself:**
- First try: ___ seconds
- 10th try: ___ seconds
- Goal: Under 30 seconds for the full sequence

---

### Exercise 2: Standard View Speed Run

**Goal:** Quickly access any view

1. Create a simple house shape
2. Practice switching between views:
   - Iso → Top → Front → Right → Iso
3. Do this 10 times
4. Time the 10th run

**Goal time:** Under 10 seconds for full cycle

---

### Exercise 3: Precision Viewing

**Goal:** Get comfortable with detail work

1. Create a detailed object (cube with smaller cubes on faces)
2. Practice:
   - Zoom to one tiny detail
   - Pan without losing it
   - Orbit around just that detail
   - Zoom Extents
   - Return to the same detail quickly

---

### Exercise 4: The No-Toolbar Challenge

**Goal:** Navigate using only keyboard/mouse

**Rules:**
- No clicking toolbar buttons
- Middle mouse for Orbit
- Shift + middle mouse for Pan
- Scroll for Zoom
- Z key for Zoom Extents

**Task:** Create a simple room and examine it from all angles

**Why this matters:** Pros never use toolbar for navigation!

---

## Part 6: Common Navigation Mistakes

### Mistake #1: Getting Lost

**Symptom:** Can't find your model, spinning in empty space

**Fix:**
- Press **Z** (Zoom Extents) immediately
- If nothing shows: Select All (Ctrl/Cmd + A) then press Z

**Prevention:**
- Use Zoom Extents frequently
- Don't orbit wildly
- Keep your model near the origin (axes center)

---

### Mistake #2: Clipping (Model Disappears)

**Symptom:** Parts of your model vanish when you zoom in

**Why it happens:** Camera is too close to geometry

**Fix:**
- Zoom out slightly
- This is a camera plane issue, not your model

---

### Mistake #3: Upside Down View

**Symptom:** Your model is upside down and orbit feels wrong

**Fix:**
- Camera → Standard Views → Iso
- Or any standard view to reset

**Prevention:**
- Don't orbit past vertical in Perspective mode

---

### Mistake #4: Jerky Navigation

**Symptom:** Navigation feels stuttery or jumpy

**Causes:**
- Model is too complex
- Too many edges visible
- Graphics card struggling

**Fixes:**
- Turn off Profiles: View → Edge Style → Profiles (uncheck)
- Use fewer materials while modeling
- Hide complex parts you're not working on

---

## Part 7: Pro Navigation Tips

### Tip #1: The Quick Peek

**Scenario:** You're working on a detail but need to check overall design

**Flow:**
1. (Working on detail)
2. Press **Z** (see everything)
3. Press **Ctrl/Cmd + Z** (undo the zoom)
4. Back to your detail!

**Why:** Quick check without losing your place

---

### Tip #2: Save Your Favorite Views (Scenes)

**We'll cover this in depth later, but:**

1. Position camera where you want
2. Window → Scenes
3. Click the "+" button
4. Name it (e.g., "Front Entry View")
5. Click that scene anytime to return!

---

### Tip #3: Double-Click to Focus

**Secret trick:**

1. Select tool active
2. **Double-click** any face or group
3. **Then orbit**
4. You orbit around THAT object perfectly!

---

### Tip #4: Middle Mouse is Your Best Friend

**Pro setup:**

- **Middle mouse button (click scroll wheel):** Orbit
- **Shift + middle mouse:** Pan  
- **Scroll wheel:** Zoom

**Never touch the toolbar buttons!**

---

### Tip #5: Navigate During Tool Use

**You can navigate WHILE using tools!**

**Example:**
1. Line tool active
2. Click first point
3. **Middle mouse drag** to orbit
4. Click second point
5. Tool never deactivated!

**This is huge for efficiency!**

---

## Part 8: Navigation Settings Optimization

### Optimize Your Navigation Feel

**Windows → Preferences → Workspace**

Recommended settings:
- ✅ "Click-drag-release to orbit" - ON
- "Click-move-click to orbit" - OFF (slower)

**Why:** The drag method is faster and more intuitive

---

### Adjust Camera Speed

**For Walk tool:**
1. Activate Walk tool
2. Camera → Walk Speed
3. Adjust slider (test it out)
4. Faster = cover more ground
5. Slower = precise control

---

## Part 9: Hardware Recommendations

### The Mouse Matters!

**Don't use a trackpad!** It's fighting with one hand tied.

**Minimum:**
- 3-button mouse with scroll wheel
- Wired or wireless (wired is slightly better)

**Recommended:**
- Logitech MX Master 3 ($99)
- Logitech M720 Triathlon ($40)
- Any gaming mouse with good scroll wheel

**Why it matters:**
- Middle mouse orbit is essential
- Smooth scrolling for zoom
- Precision for detail work
- Your hand won't cramp

---

### Display Setup

**Single monitor:**
- 24" minimum
- 27" ideal
- 1920×1080 minimum resolution

**Dual monitors:**
- Model on main screen
- Panels/references on second screen
- Game changer for professional work!

---

## 🎯 Module 2 Success Checklist

- [ ] I can orbit smoothly in any direction
- [ ] I can pan to reposition views
- [ ] I zoom in and out naturally
- [ ] I use middle mouse for orbit without thinking
- [ ] I've mastered Zoom Extents (Z key)
- [ ] I can quickly access standard views
- [ ] I understand perspective vs parallel projection
- [ ] I've tried the Walk tool
- [ ] Navigation doesn't interrupt my thinking
- [ ] I can navigate during tool use

**Speed Test:** Create a cube, examine all 6 faces in under 15 seconds

**Passed? ✅** You're ready to move on!

---

## 💡 Key Takeaways

1. **Navigation is the foundation** - Master this first
2. **Middle mouse is essential** - Use it constantly
3. **Zoom Extents (Z) is your safety net** - Never be lost
4. **Orbit, Pan, Zoom work together** - They're a system
5. **Smooth navigation = creative flow** - You stop thinking about it

---

## 🚀 What's Next?

Now that you can navigate effortlessly, you're ready to learn the TOOLS!

**Next Module:** [Essential Tools →](../03-essential-tools/README.md)

Module 3 is where the real magic happens. You'll learn every major tool and WHY professionals use them.

---

<div align="center">

**🎉 You're now a navigation pro!**

*Most beginners quit because navigation frustrates them.*  
*You pushed through. That's what separates success from failure.*

</div>

