# Portfolio Builder - Implementation Plan

We will build a premium, modern Portfolio Builder application with a responsive split-screen builder, real-time live preview, customization controls, PDF export, authentication, and a Node.js/Express/MongoDB backend.

## User Review Required

> [!IMPORTANT]
> **MongoDB Cluster Connection**
> We will use the MongoDB connection string provided in your request: `mongodb+srv://yt:passwordword@cluster0.nhn2eon.mongodb.net/portfolio_builder`.
> We will store this in a `.env` file along with JWT secrets for secure login.
> 
> **Image Storage (ImageKit)**
> We will implement support for ImageKit image/file uploads. If ImageKit credentials are not configured in the `.env` file, the application will automatically fallback to serving uploads locally or saving them as base64 URLs. This guarantees that the application works out-of-the-box.

> [!TIP]
> **VS Code Live Server Support (Port 5500/5501)**
> You mentioned that your Live Server runs on port 5501 while the backend is on 5000. We have updated the frontend to automatically detect if it's being run on a different local port (like 5501) and it will correctly route all API requests to `http://localhost:5000/api`. This means you can continue using your Live Server extension without getting any "Error connecting to server" messages!

## Proposed Architecture & Components

```mermaid
graph TD
    Client[Browser Frontend: HTML/CSS/JS] -->|Fetch API / JWT| Auth[Auth Routes: /api/auth]
    Client -->|Fetch API / JWT| Port[Portfolio Routes: /api/portfolios]
    Client -->|View Portfolio| Pub[Public Routes: /p/:username]
    Auth --> DB[(MongoDB Atlas)]
    Port --> DB
    Pub --> DB
```

---

## Proposed Changes

### Backend Component

We will create a Node.js / Express backend inside the workspace. The backend will serve the frontend static files and expose API endpoints.

#### [NEW] [package.json](file:///home/ax/End%20s6/package.json)
- Define dependencies: `express`, `mongoose`, `jsonwebtoken`, `bcryptjs`, `dotenv`, `cors`, `multer` (for handling file uploads locally if needed).

#### [NEW] [.env](file:///home/ax/End%20s6/.env)
- Store configuration:
  - `PORT=5000`
  - `MONGO_URI=mongodb+srv://yt:passwordword@cluster0.nhn2eon.mongodb.net/portfolio_builder`
  - `JWT_SECRET=super_secret_portfolio_key_123`
  - `IMAGEKIT_PUBLIC_KEY=` (Optional)
  - `IMAGEKIT_PRIVATE_KEY=` (Optional)
  - `IMAGEKIT_URL_ENDPOINT=` (Optional)

#### [NEW] [server.js](file:///home/ax/End%20s6/server.js)
- Entry point of the Express server.
- Serves static assets from `/home/ax/End s6` (HTML/CSS/JS).
- Maps routes for `/api/auth`, `/api/portfolios`, and public portfolio lookup `/api/public/:username`.
- Rewrites requests to `/p/:username` to serve the frontend single-page application, letting the frontend router handle public portfolio display.

#### [NEW] [models/User.js](file:///home/ax/End%20s6/models/User.js)
- MongoDB User Schema:
  - `name`: String, required
  - `email`: String, required, unique
  - `password`: String, required
  - `portfolios`: Array of references to Portfolio documents.

#### [NEW] [models/Portfolio.js](file:///home/ax/End%20s6/models/Portfolio.js)
- MongoDB Portfolio Schema:
  - `user`: ObjectId reference to User
  - `title`: String, required (e.g. "My Software Engineering Portfolio")
  - `slug`: String, unique (e.g. "arpan-mahapatra")
  - `template`: String (e.g., "minimalist", "modern", "creative", "tech")
  - `theme`: Object (themeColor, isDarkMode, font, borderRadius, profileImageOn)
  - `sectionOrder`: Array of Strings (ordering of sections)
  - `personalInfo`: Object (name, role, about, email, phone, location, profileImage)
  - `resumeUrl`: String
  - `skills`: Array of Strings
  - `education`: Array of Objects (school, degree, year, description)
  - `experience`: Array of Objects (company, role, duration, description)
  - `projects`: Array of Objects (title, description, link, tags)
  - `socialLinks`: Object (github, linkedin, twitter, website)

#### [NEW] [routes/auth.js](file:///home/ax/End%20s6/routes/auth.js)
- `POST /api/auth/register` (hashing password with bcrypt, generating JWT token).
- `POST /api/auth/login` (verifying email/password, returning JWT token).
- `GET /api/auth/me` (fetching active user profile using JWT middleware).

#### [NEW] [routes/portfolio.js](file:///home/ax/End%20s6/routes/portfolio.js)
- Middleware to verify JWT.
- `GET /api/portfolios`: Get all portfolios of authenticated user.
- `POST /api/portfolios`: Create new portfolio (validates unique slug, generates initial schema).
- `GET /api/portfolios/:id`: Get a specific portfolio.
- `PUT /api/portfolios/:id`: Update portfolio configuration, content, customize theme, re-order sections.
- `DELETE /api/portfolios/:id`: Delete a portfolio.
- `POST /api/portfolios/upload-resume`: Endpoint for uploading resume/profile photo. Fallback to local storage if ImageKit credentials are not set.

#### [NEW] [routes/public.js](file:///home/ax/End%20s6/routes/public.js)
- `GET /api/public/:slug`: Public endpoint to fetch portfolio data by slug (does not require auth).

---

### Frontend Component

The frontend will be built in the 3 requested files: `index.html`, `style.css`, and `script.js`. It will feature a premium Dark-Mode Dashboard, a Live Builder, and beautifully responsive themes.

#### [MODIFY] [index.html](file:///home/ax/End%20s6/index.html)
- Single Page Application (SPA) structure:
  - **Landing View**: Stunning hero, features, "Get Started" call to action.
  - **Auth View**: Login and registration forms.
  - **Dashboard View**: User portfolios list, create portfolio card, template selection.
  - **Builder View**: Split screen interface:
    - **Sidebar Customizer Tabs**: Details (Forms for Personal Info, Education, Experience, Projects), Customization (theme color, dark/light mode toggle, font family, border-radius, profile image toggles, and section ordering with up/down arrows), Export (Preview, Download PDF, Share Portfolio, Copy Link).
    - **Live Preview Pane**: Renders the generated portfolio in real-time, responding to every keystroke.
  - **Public Portfolio View**: Rendered dynamically if the browser path is `/p/:slug` or query parameter `?p=slug`.

#### [MODIFY] [style.css](file:///home/ax/End%20s6/style.css)
- Implement CSS variables for premium dark theme UI (Slate, Indigo, Violet accent palette).
- Clean customizer interface layouts (glassmorphism dashboard panels, smooth hover state translations, responsive grids).
- Custom styles for **4 Design Templates**:
  1. *Minimalist*: Understated, airy, focus on elegant typography.
  2. *Modern*: Bold headings, sleek card borders, left-hand header bar.
  3. *Creative*: Rich gradients, playful shape borders, high contrast badges.
  4. *Developer/Tech*: Terminal style layout, monospace accents, clean tag boxes.
- CSS Print rules specifically configured for the **PDF Download** feature (ensures print layout ignores the builder interface and wraps columns perfectly).

#### [MODIFY] [script.js](file:///home/ax/End%20s6/script.js)
- **State Management**: Holds user session token, active portfolio configuration, and current editing section.
- **Smart API Routing**: Automatically detects if you are using VS Code Live Server on port 5501 and points API requests to the backend server running on port 5000 via CORS, solving the connection errors.
- **Routing Module**: Simple pathname routing (`/`, `/dashboard`, `/builder/:id`, `/p/:slug`) with fallback URL parameters for static server support.
- **Live Sync**: Updates the live preview iframe/document structure upon input events.
- **Resume Upload & Pre-fill Handler**: Triggers resume upload, stores resume URL, and extracts key details (mock/simple parsing of text) to speed up profile completion.
- **Customization Actions**: Theme color, fonts (updates stylesheet variables dynamically inside preview), border radius, and section reordering.
- **Export Module**:
  - *Preview*: Launches full screen portfolio.
  - *Download PDF*: Triggers `window.print()` with a specialized CSS format.
  - *Share Portfolio / Copy Link*: Copies URL to clipboard with smooth toast notification.

---

## Verification Plan

### Automated Tests
We can run basic server-side tests to verify:
- API registration & login validity.
- CRUD operations for portfolios.
- Database connectivity checks on startup.

We will write a test server validation script:
- `node server.js` to ensure the server starts and connects successfully to MongoDB.

### Manual Verification
1. Open the application in the browser.
2. Sign up as a new user.
3. Create a portfolio, select the "Developer/Tech" template.
4. Input details (About, Skills, Experience, Projects) and verify real-time preview updates.
5. Customize: Switch themes (Slate -> Rose), fonts, toggles, and reorder sections.
6. Verify layout looks premium on mobile/desktop screens.
7. Click "Copy Link" and open it in a new incognito window to verify the public portfolio page renders properly.
8. Click "Download PDF" and check layout preview.
