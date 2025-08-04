

## Tech Stack
### Core Technologies
- **React 18.3.1** - Frontend framework with hooks and functional components


### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework for rapid styling
- **Lucide React 0.344.0** - Beautiful, customizable SVG icons
- **PostCSS 8.4.35** - CSS processing with Autoprefixer


## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd realestate-app
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

### Deliverables
**Layout Approach**: I used a card-based design with a vertical layout that prioritizes visual hierarchy - image at top, product details in the middle, and action elements at the bottom. This creates a scannable, consistent experience across all products.

**Responsiveness Considerations**: The design uses a mobile-first responsive grid that scales from single column on mobile devices to up to 4 columns on large screens, with careful attention to touch targets and readable text sizes across all breakpoints.

### Features
The cards include hover animations, proper loading states, variant dropdown functionality, and dynamic pricing display. The out-of-stock handling works both at the product level and individual variant level, with appropriate visual feedback throughout.

