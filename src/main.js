import React from 'react';
import ReactDOM from 'react-dom/client';

const features = [
  'Zero-install starter structure',
  'Reusable React components without extra tooling',
  'Clean styling you can customize immediately',
];

function App() {
  return React.createElement(
    'main',
    { className: 'app-shell' },
    React.createElement(
      'section',
      { className: 'hero-card' },
      React.createElement('p', { className: 'eyebrow' }, 'Simple React Starter'),
      React.createElement('h1', null, 'Welcome to your new React app'),
      React.createElement(
        'p',
        { className: 'description' },
        'This lightweight starter gives you a friendly landing page, a short feature list, and a call-to-action button so you can begin building right away.'
      ),
      React.createElement(
        'div',
        { className: 'actions' },
        React.createElement('button', { type: 'button' }, 'Get Started'),
        React.createElement(
          'a',
          {
            href: 'https://react.dev',
            target: '_blank',
            rel: 'noreferrer',
          },
          'React Docs'
        )
      ),
      React.createElement(
        'ul',
        { className: 'feature-list' },
        features.map((feature) => React.createElement('li', { key: feature }, feature))
      )
    )
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  React.createElement(React.StrictMode, null, React.createElement(App))
);
