import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Container } from './main-container';

createRoot(document.getElementById('root')!)
    .render(
        <StrictMode>
            <Container />
        </StrictMode>
    );

