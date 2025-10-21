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
  background: vars.colour.background,
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
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  textAlign: 'center',
});

export const mainContent = style({
  margin: '1rem auto',
  flex: 1,
});

export const middleAlignment = style({
  display: 'flex',
  justifyContent: 'center',
  margin: '20px',
});

export const navbarNav = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
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

export const card = style({
  border: '1px solid #ccc',
  borderRadius: '10px',
  overflow: 'hidden',
  padding: '20px',
});

export const welcomeBox = style([
  card,
  {
    maxWidth: '900px',
    fontSize: '1.5rem',
    margin: '5px',
    listStyleType: 'none',
  },
]);

globalStyle(`${welcomeBox} h3`, {
  fontSize: '3rem',
  textAlign: 'center',
});

export const infoCard = style([
  card,
  {
    maxWidth: '900px',
    padding: '10px',
    listStyleType: 'none',
    display: 'flex',
  },
]);

export const infoMessage = style({
  textAlign: 'center',
});

export const productGrid = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '16px',
  padding: '0',
  margin: '0',
  listStyle: 'none',
  overflowX: 'auto',
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
  padding: '12px',
  borderRadius: '8px',
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

export const productImage = style({
  width: '50%',
  aspectRatio: '1 / 1',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '0.5rem',
});

export const caption = style({
  fontSize: '14px',
  color: '#ffffffff',
  textAlign: 'center',
});

export const productList = style({
  padding: '1rem',
});

// With this (more specific):
globalStyle(`.${productList} > li`, {
  display: 'grid',
  gridTemplateColumns: '5rem 1fr',
  gridTemplateRows: 'auto auto',
  alignItems: 'center',
  padding: '1rem 2rem',
  columnGap: '2rem',
  fontSize: '1.4rem',
  borderBottom: `1px solid ${vars.colour.hovor}`,
});

globalStyle(`${productList} li:hover`, {
  backgroundColor: vars.colour.hovor,
});

globalStyle(`${productList} img`, {
  width: '100%',
  gridRow: '1 / -1',
});

globalStyle(`${productList} h3`, {
  fontSize: '2rem',
});

export const infoRow = style({
  display: 'grid',
  alignSelf: 'center',
  cursor: 'pointer',
});

export const favButton = style({
  gridColumn: '3',
  alignSelf: 'center',
  justifySelf: 'start',
  padding: '0.5rem',
});

export const productItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '80%',
  margin: '16px auto',
  alignItems: 'center',
  selectors: {
    '&:hover': {
      backgroundColor: vars.colour.hovor,
    },
  },
});

export const baseButton = style({
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

globalStyle(`${baseButton}:hover`, {
  borderColor: vars.colour.purple,
});

globalStyle(`${baseButton}:focus, ${baseButton}:focus-visible`, {
  outline: '4px auto -webkit-focus-ring-color',
});

export const buttonRow = style({
  display: 'flex',
  gap: '12px',
  marginTop: '8px',
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
