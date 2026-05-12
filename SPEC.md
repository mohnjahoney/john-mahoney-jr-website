# SPEC

## Project Overview

Build a simple, tasteful static website for a professional folk/acoustic musician.

The goal is not aggressive marketing or personal branding.
The site should function more like a clear and elegant public home for music, performances, and contact information.

The site should feel:

- calm
- warm
- understated
- honest
- readable
- music-centered
- lightly curated rather than heavily designed

Avoid:

- flashy animation
- startup aesthetics
- overly commercial presentation
- clutter
- excessive interaction
- complicated navigation

---

# Site Structure

The site should initially remain relatively small and restrained in scope.

A multi-page structure is acceptable and likely preferable if it improves clarity, pacing, or organization.

The architecture should support:

- a modest landing/home page
- dedicated content sections or pages
- gradual future expansion

The overall experience should still feel cohesive and lightweight rather than sprawling.

Primary sections:

1. Hero / Introduction
2. About
3. Music & Video
4. Upcoming Performances
5. Recent Performances
6. Contact

Navigation may either:

- remain minimal and understated
- use a small sticky navigation bar
- use simple page transitions or anchor navigation

Navigation should feel quiet, intuitive, and unobtrusive.

---

# Section Details

## 1. Hero / Introduction

Purpose:
Immediately establish identity and tone.

Content:

- Main professional headshot
  - Use: `/assets/images/portrait-with-classical-guitar.jpg`
- Musician name
- Short descriptive subtitle
- Brief introductory text

Possible subtitle examples:

- Folk & Acoustic Performance
- Bass-Baritone Vocalist
- Folk, Acoustic, and Storytelling Traditions

Layout notes:

- Large readable typography
- Spacious layout
- Image-forward but restrained
- Support portrait-oriented photography gracefully
- Avoid aggressive cropping of portrait images
- Desktop layout may place portrait image beside text rather than using a full-width hero background
- No autoplay media

---

## 2. About

Purpose:
Provide a concise artist introduction.

Content:

- Short biography
- Musical background
- Influences/interests
- Brief note about performance style or philosophy
- Optional secondary performance photos

The writing should feel personal and grounded rather than promotional.

---

## 3. Music & Video

Purpose:
Allow visitors to quickly experience the music.

This section may gradually evolve into lightly grouped musical contexts or project categories while still preserving a unified overall artist identity.

Content:

- Selected SoundCloud links or embeds
- One or two embedded videos
- Carefully curated media only

Requirements:

- Keep this section lightweight
- Best recordings should appear first
- Avoid overwhelming visitors with too many media items

Potential embed sources:

- SoundCloud
- YouTube
- Vimeo

---

## 4. Upcoming Performances

Purpose:
Show active performance schedule.

Content:

- Date
- Venue
- Location
- Optional ticket/info link

Initial implementation may simply be a manually edited list.

Future enhancement possibility:

- Pull events automatically from a public Google Calendar or iCal feed

---

## 5. Recent Performances

Purpose:
Provide quiet evidence of continued musical activity.

This section should remain visually low-impact.

Possible formats:

- Simple chronological list
- Minimal cards
- Small archive section

No extensive event management system is required.

---

## 6. Contact

Purpose:
Provide a simple and direct contact pathway.

Content:

- Email address
- Optional booking note
- Optional social/media links

Avoid complicated forms unless clearly needed later.

A mailto link is acceptable for v1.

---

# Visual Design

## General Direction

The visual design should feel:

- literary
- acoustic
- human
- mature
- uncluttered
- contemporary but restrained
- atmospheric without becoming theatrical

Inspirations:

- folk venue posters
- public radio aesthetics
- arts organization websites
- minimal photography portfolios

Avoid:

- neon colors
- tiny fonts
- dense layouts
- trendy web effects
- excessive motion
- app-like interface design
- social-media-style visual density

Subtle contemporary motion and interaction design are acceptable when implemented with restraint.

Examples may include:

- gentle fade-in transitions
- smooth scrolling
- soft hover transitions
- understated image movement
- subtle parallax effects
- slow section reveals

Motion should feel atmospheric and nearly invisible rather than attention-seeking.

---

## Typography

Priorities:

- readability
- elegance
- restraint

Use:

- large body text
- generous spacing
- strong hierarchy
- minimal font pairing

---

## Photography

Preferred imagery:

- natural light
- live performance photos
- candid or lightly staged portraits
- instruments and venues

## Photo Usage Strategy

The musician may provide multiple photographs representing different musical contexts or projects.

Possible categories may include:

- solo folk guitar and voice
- big band performances
- Gordon Lightfoot-related material
- family-oriented or community performances
- Chapman Stick / experimental material
- acoustic ensemble work

The site does not necessarily need a dedicated gallery.

Instead, photographs may be used contextually throughout the page to subtly support different musical themes or sections.

For example:

- a folk-oriented image near acoustic recordings
- a performance photo near upcoming events
- a more experimental image near unusual instrumentation or projects

The overall experience should still feel restrained and curated rather than image-heavy.

Avoid:

- glamour-style photography
- heavy filters
- overly polished commercial imagery

---

# Technical Architecture

## Hosting

The site will be hosted using GitHub Pages.

Requirements:

- fully static
- no backend
- low maintenance
- inexpensive hosting
- reliable deployment

---

## Domain

The site should support a custom domain managed through GoDaddy.

Requirements:

- ability to connect GitHub Pages to custom domain
- HTTPS support
- avoid hardcoded GitHub Pages URLs
- use relative asset paths where appropriate

The architecture should remain portable if hosting changes later.

---

## Stack

Preferred stack:

- semantic HTML
- modern CSS
- lightweight JavaScript
- lightly structured content organization

The project may optionally use lightweight tooling where helpful.

Possible approaches include:

- plain static files
- Vite
- lightweight static site tooling

The implementation should avoid unnecessary complexity while still supporting:

- responsive layouts
- subtle frontend enhancement
- clean content organization
- future maintainability

Avoid:

- backend frameworks
- databases
- unnecessary abstraction
- heavy frontend frameworks unless clearly beneficial
- application-style architecture

Simplicity and durability are preferred over sophistication.

---

## Responsiveness

The site must work well on:

- desktop
- tablet
- mobile

Mobile usability is important.

Design should remain clean and readable at smaller sizes.

---

## Content Organization

Content should remain lightly structured and separated from layout where practical.

Possible organization examples:

```txt
/content
  site.js
  events.js
  media.js
  projects.js
```

The goal is not to build a CMS.

The goal is:

- maintainability
- clarity
- easier content updates
- modest future flexibility

This organization should remain simple and understandable.

---

# Asset Organization

Project assets should be stored in a clear and predictable structure.

Preferred organization:

```txt
/assets
  /images
  /videos
  /audio
```

Current project image assets are located in:

```txt
/assets/images
```

Current image set includes:

```txt
big-band-Sinatra-show-at-Cafe-Coda.jpg
classical-guitar-for-Charlie-Robinson-tribute.jpeg
dressed-as-john-lennon.jpg
John-and-Joey-singing-and-playing.jpg
johnny-dad-max.jpeg
Lightfoot-Project-portrait-at-MONCA.jpeg
playing-Chapman-stick-Hawaii.jpeg
playing-classical-guitar-casual.png
portrait-with-classical-guitar.jpg
portrait-with-science-quote.jpg
singing-and-playing-piano.jpg
singing-with-guitar-open-mic.jpg
```

The filenames intentionally contain contextual information and should be used when selecting imagery for different sections, musical contexts, or projects.

Prefer thoughtful contextual image placement over generic gallery-style presentation.

# Future Enhancements (Optional)

Possible future additions:

- automatic calendar sync
- mailing list integration
- downloadable press kit
- photo gallery
- additional media archive
- simple CMS-like editing workflow

These are not required for v1.

---

# Non-Goals

The project is intentionally NOT:

- a social media platform
- a content-heavy CMS
- a startup-style personal brand
- a heavily animated experience
- a highly interactive web application

The emphasis is clarity, warmth, simplicity, and musical presence.