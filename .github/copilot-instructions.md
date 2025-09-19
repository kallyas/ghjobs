# GitHub Jobs React Application

A React application that displays developer jobs using the GitHub Jobs API. Built with React 16.13.1, React Bootstrap, and Create React App.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Bootstrap and Install Dependencies
- **CRITICAL**: Use Node.js v20+ (v20.19.5 tested and working)
- **CRITICAL**: Do NOT delete `package-lock.json` - it contains tested dependency versions
- `npm install --legacy-peer-deps` -- takes 60 seconds. NEVER CANCEL. Set timeout to 120+ seconds.
  - **REQUIRED**: The `--legacy-peer-deps` flag is mandatory due to React 16 compatibility issues
  - Without this flag, installation fails with ERESOLVE dependency conflicts
  - **WARNING**: Fresh installs without package-lock.json may fail with ajv module errors
  - If dependencies break after fresh install, restore `package-lock.json` from git

### Build and Development
- `npm run build` -- takes 8-10 seconds. NEVER CANCEL. Set timeout to 60+ seconds.
  - Creates optimized production build in `/build` directory
  - Build assumes hosting at `/ghjobs/` path (configured in package.json homepage)
- `npm start` -- starts development server in 5-6 seconds. NEVER CANCEL. Set timeout to 60+ seconds.
  - Runs on http://localhost:3000/ghjobs
  - Hot reload enabled, listens on port 3000

### Testing
- `npm test -- --watchAll=false --passWithNoTests` -- runs in 1-2 seconds
  - No test files exist in this repository
  - Use `--passWithNoTests` to avoid exit code 1 when no tests found
  - Use `--watchAll=false` to run once without watch mode

### Deployment
- `npm run predeploy` -- runs build process (8-10 seconds)
- `npm run deploy` -- deploys to GitHub Pages (requires push access)

## Validation Scenarios

### Manual Application Testing
Always test the running application after making changes:
1. Start development server: `npm start`
2. Navigate to http://localhost:3000/ghjobs
3. Verify the interface loads with:
   - "GitHub Jobs" heading
   - Search form with Description, Location fields
   - "Only Full Time" checkbox
   - Pagination controls
4. **Expected behavior**: The API may show "Error. Try Refreshing." due to GitHub Jobs API being deprecated, but the UI should render correctly
5. Test form interactions:
   - Type in Description and Location fields
   - Toggle the "Only Full Time" checkbox
   - Click pagination controls

### Code Quality Validation
- ESLint is configured via `react-app` preset in package.json
- No separate lint command exists - linting runs automatically during `npm start` and `npm run build`
- Always run `npm run build` to validate there are no TypeScript/ESLint errors before committing

## Critical Dependency Information

### Fixed Compatibility Issues
- **react-bootstrap**: Must use v1.6.7 (NOT v2.x) - newer versions require React 17+
- **react-markdown**: Must use v6.0.3 (NOT v4.x or v8.x) - v4.x has webpack polyfill issues, v8.x requires React 17+
- **React version**: Locked at 16.13.1 - DO NOT upgrade without extensive testing

### Installation Troubleshooting
- If `npm install` fails with ERESOLVE errors, use `--legacy-peer-deps`
- If build fails with "Can't resolve 'react/jsx-runtime'" errors, check react-bootstrap version
- If build fails with path polyfill errors, check react-markdown version
- **If fresh install fails with "Cannot find module 'ajv/dist/compile/codegen'" error**:
  1. `git checkout HEAD package-lock.json` (restore working lock file)
  2. `rm -rf node_modules`
  3. `npm install --legacy-peer-deps`
- **NEVER delete package-lock.json** - it contains validated dependency tree

## Repository Structure

### Source Code Layout
```
/src
├── App.js              # Main application component with state management
├── index.js            # React app entry point
├── Job.js              # Individual job listing component with markdown rendering
├── JobsPagination.js   # Pagination controls component
├── SearchForm.js       # Search form with description, location, full-time filters
└── useFetchJobs.js     # Custom hook for API calls and pagination logic
```

### Key Application Logic
- **API Integration**: `useFetchJobs.js` handles GitHub Jobs API calls with axios
- **State Management**: React hooks (useState, useReducer) in App.js and custom hook
- **UI Components**: React Bootstrap components for responsive design
- **Markdown Rendering**: react-markdown for job descriptions
- **Pagination**: Custom pagination logic with hasNextPage detection

### Configuration Files
- `package.json` - Dependencies and scripts (homepage set to /ghjobs/ for GitHub Pages)
- `.gitpod.yml` - Gitpod configuration (runs npm install && npm run build, then npm start)
- `public/index.html` - Uses Bootstrap 5.0.0-alpha1 from CDN

## Common Development Tasks

### Making UI Changes
1. Components use React Bootstrap - ensure compatibility with v1.6.7
2. Test responsive behavior - app uses Bootstrap grid system
3. Always test in browser after changes to verify Bootstrap components render correctly

### API Integration Changes
1. Check `useFetchJobs.js` for API logic
2. Base URL: `https://jobs.github.com/positions.json` (note: this API is deprecated)
3. API calls include pagination (`page` parameter) and search filters
4. Always test both successful and error states

### Styling Changes
1. Primary styling via React Bootstrap components and classes
2. Bootstrap CSS loaded from CDN in `public/index.html`
3. Custom styles use inline styles or Bootstrap utility classes
4. Test with different screen sizes for responsive behavior

## Performance Notes
- Bundle size after gzip: ~100KB (main.js)
- Development build includes source maps and is not optimized
- Production build includes code splitting and optimization
- Hot reload works correctly in development mode

## Known Issues and Limitations
- GitHub Jobs API is deprecated - application shows "Error. Try Refreshing." for API calls
- Application structure and UI work correctly despite API issues
- No test files present - add tests in `src/__tests__/` or `src/*.test.js` format
- Uses older React 16 - modern React features (Suspense, Concurrent Mode) not available
- Bootstrap version is alpha - some newer Bootstrap features may not be available