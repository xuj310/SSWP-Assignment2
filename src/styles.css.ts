import { style, globalStyle, createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  colour: {
    hovor: '#e0e0e0',
    main: '#333',
    background: '#f5f5f5',
    purple: '#a855f7',
  },
});

globalStyle(':root', {
  fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
  lineHeight: 1.5,
  fontWeight: 400,
});

globalStyle('body', {
  background: 'var(--primary)',
  boxSizing: 'border-box',
});

globalStyle('p, a', {
  fontSize: '0.85em',
  lineHeight: 1,
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('a:hover', {
  color: vars.colour.hovor,
});

globalStyle('.search::placeholder', {
  fontSize: '20px',
});

export const app = style({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

export const infoMessage = style({
  textAlign: 'center',
});

export const middleAlignment = style({
  display: 'flex',
  justifyContent: 'center',
  margin: '20px',
});

export const welcomeBox = style({
  maxWidth: '900px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  overflow: 'hidden',
  padding: '20px',
  listStyleType: 'none',
  fontSize: '1.5rem',
  margin: '5px',
});

globalStyle(`${welcomeBox} h3`, {
  fontSize: '3rem',
});

globalStyle(`${welcomeBox} li`, {
  display: 'flex',
  gap: '10px',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '15px',
});

export const infoCard = style({
  display: 'flex',
  maxWidth: '900px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  overflow: 'hidden',
  padding: '10px',
  listStyleType: 'none',
});

globalStyle(`${infoCard} li:hover`, {
  backgroundColor: 'none',
});

globalStyle(`${infoCard} img`, {
  height: '300px',
  objectFit: 'cover',
  display: 'block',
  margin: '0 auto',
});

globalStyle(`${infoCard} h3`, {
  fontSize: '3rem',
});

globalStyle(`${infoCard} p, ${infoCard} a`, {
  fontSize: '1.1em',
  lineHeight: 1,
  color: 'inherit',
  textDecoration: 'none',
  letterSpacing: '0.20px',
});

// 📋 List styles
export const list = style({
  padding: '1rem',
});

globalStyle(`${list} li:hover`, {
  backgroundColor: vars.colour.hovor,
});

globalStyle(`${list} li`, {
  display: 'grid',
  gridTemplateColumns: '5rem 1fr',
  gridTemplateRows: 'auto auto',
  alignItems: 'center',
  padding: '1rem 2rem',
  columnGap: '2rem',
  fontSize: '1.4rem',
  borderBottom: `1px solid ${vars.colour.hovor}`,
});

export const infoRow = style({
  display: 'grid',
  alignSelf: 'center',
  cursor: 'pointer',
});

globalStyle(`${list} img`, {
  width: '100%',
  gridRow: '1 / -1',
});

export const favButton = style({
  gridColumn: '3',
  alignSelf: 'center',
  justifySelf: 'start',
  padding: '0.5rem',
});

globalStyle(`${list} h3`, {
  fontSize: '2rem',
});

// 🔘 Button styles
export const button = style({
  borderRadius: '8px',
  border: '1px solid transparent',
  padding: '0.6em 1.2em',
  fontSize: '1em',
  fontWeight: 500,
  fontFamily: 'inherit',
  backgroundColor: vars.colour.background,
  cursor: 'pointer',
  transition: 'border-color 0.25s',
});

globalStyle(`${button}:hover`, {
  borderColor: vars.colour.purple,
});

globalStyle(`${button}:focus, ${button}:focus-visible`, {
  outline: '4px auto -webkit-focus-ring-color',
});

export const mainContent = style({
  margin: '1rem auto',
  flex: 1,
});

// 🧭 Navbar styles
export const navbarNav = style({
  justifyContent: 'space-between',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
});

export const rightAligned = style({
  display: 'flex',
  justifyContent: 'space-evenly',
  cursor: 'pointer',
});

export const headerItem = style({
  fontSize: '1.5rem',
  letterSpacing: '0.2rem',
  margin: '5px',
});

export const gridContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, minmax(200px, 1fr))',
  gap: '16px',
  padding: '16px',
});

export const gridItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '8px',
  padding: '12px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
});

export const image = style({
  width: '100%',
  aspectRatio: '1 / 1',
  objectFit: 'cover',
  borderRadius: '4px',
  marginBottom: '8px',
});
export const smallImage = style({
  width: '30%',
  aspectRatio: '1 / 1',
  objectFit: 'cover',
  borderRadius: '4px',
  marginBottom: '8px',
});

export const caption = style({
  fontSize: '14px',
  color: '#ffffffff',
  textAlign: 'center'
});

export const verticalGridContainer = style({
  display: 'flex',
  flexDirection: 'column', 
  gap: '16px',            
});

export const verticalGridItem = style({
  display: 'flex',
  flexDirection: 'row',       
  alignItems: 'center',       
  gap: '12px',                
});
