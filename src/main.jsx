import ReactDOMClient from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { App } from '@/components/app/app'
import '@/styles/main.css';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
) 