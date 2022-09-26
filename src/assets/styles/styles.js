/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled/macro';

export const testStyle = css({
    color: 'red'
});

export const container = css({
    padding: '0 2rem'
});

export const main = css({
    minHeight: '100vh',
    padding: '4rem 0',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
});

export const footer = css({
    display: 'flex',
    flex: 1,
    padding: ' 2rem 0',
    borderTop: '1px solid #eaeaea',
    justifyContent: 'center',
    alignItems: 'center',
    '& a ': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1
    }
});

export const title = css({
    margin: 0,
    lineheight: 1.15,
    fontSize: '7rem',
    fontStyle: 'italic',
    textAlign: 'center',
    '& a': {
        color: '#0070f3',
        textDecoration: 'none'
    },
    '& a:hover, a:focus, a:active': {
        textDecoration: 'underline'
    }
});

export const description = css({
    textAlign: 'center',
    margin: '4rem 0',
    lineHeight: 1.5,
    fontSize: ' 1.5rem'
});

export const code = css({
    background: '#fafafa',
    borderRadius: '5px',
    padding: '0.75rem',
    fontSize: '1.1rem',
    fontFamily:
        'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace'
});

export const grid = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: ' 800px'
});

export const card = css({
    margin: '1rem',
    padding: '1.5rem',
    textAlign: 'left',
    color: 'inherit',
    textDecoration: 'none',
    border: '1px solid #eaeaea',
    borderRadius: '10px',
    transition: 'color 0.15s ease, border-color 0.15s ease',
    maxWidth: ' 300px',
    '& :hover, :focus, :active': {
        color: ' #0070f3',
        borderColor: ' #0070f3'
    },
    '& h2': {
        margin: '0 0 1rem 0',
        fontSize: '1.5rem'
    },
    '& p': {
        margin: 0,
        fontSize: ' 1.25rem',
        lineHeight: 1.5
    }
});

export const logo = css({
    height: ' 1em',
    marginLeft: ' 0.5rem'
});

export const antd = css({
    marginTop: '25px'
});

export const antdButton = css({
    marginTop: '25px auto 0 auto',
    display: 'block'
});
