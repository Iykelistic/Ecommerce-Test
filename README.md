# Real Estate Floor Selector App

A modern, interactive web application that allows users to explore residential towers, browse floors, and view detailed apartment layouts. Built with React, featuring smooth animations and responsive design.

## Features

- **Tower Selection**: Browse and select from multiple residential towers
- **Floor Navigation**: Interactive floor selection with visual floor indicators
- **Unit Browsing**: View apartment thumbnails with key metadata (area, bedrooms, bathrooms, price)
- **Detailed Unit View**: Full apartment specifications with high-quality images
- **Breadcrumb Navigation**: Easy navigation between different levels
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Hover effects, scaling transitions, and micro-interactions
- **Modern UI**: Clean, professional design with intuitive user experience

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
npm run dev
```

### Current Limitations
1. **Mock Data**: All tower, floor, and unit data is generated programmatically rather than fetched from a real API
2. **Image Placeholders**: Uses Pexels stock photos as placeholder images instead of actual property photos
3. **No Persistence**: User selections and favorites are not saved between sessions
4. **No Search/Filter**: No ability to search or filter units by criteria (price, size, etc.)

### Performance Considerations
1. **Image Loading**: External images from Pexels may load slowly depending on network conditions
2. **Re-renders**: Component re-renders entire view on state changes rather than using optimized sub-components
3. **Memory Usage**: Generates unit data on each render instead of memoizing results

## Future Enhancements
- Integrate with real estate API
- Add unit comparison features
- Add booking/scheduling system

