import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { setupStore } from './store/store';
import { Provider } from 'react-redux';
//import './styles/output.css';
import FormBar from './components/logreg';
import Profile from './components/profile';
import GoodsCreateForm from './components/goods_create';

export const store = setupStore();

const Search = lazy(() => import('./components/search.js'));
const NavBar = lazy(() => import('./components/nav/nav_bar.js'));
const Main = lazy(() => import('./components/main.js'));

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
    
    componentDidCatch(error, errorInfo) {
      // Catch errors in any components below and re-render with error message
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
      // You can also log error messages to an error reporting service here
    }
    
    render() {
      if (this.state.errorInfo) {
        // Error path
        return (
          <div>
            <h2>Что-то пошло не так.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
            <a href="/">Перейти на главную</a>
          </div>
        );
      }
      // Normally, just render children
      return this.props.children;
    }  
  }

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ErrorBoundary>
                <Provider store={store}>
                    <Router>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Routes>
                              <Route path="/" element={<div><NavBar /><Search /><Main /></div>} />
                              <Route path="/goods/:id" element={<div><NavBar without={true} /><Main /></div>} />
                              <Route path="/logreg" element={<div><FormBar /></div>} />
                              <Route path="/user/:nick" element={<div><NavBar without={true} /><Profile /></div>} />
                              <Route path="/create" element={<div><GoodsCreateForm /></div>} />
                            </Routes>
                        </Suspense>
                    </Router>
                </Provider>
            </ErrorBoundary>
        );
    }
}

const root = ReactDOM.createRoot(
    document.getElementById('root')
);
root.render(<App />);

//<Route path="/" element={<div><NavBar /><Search /><Main /></div>} />
//<Route path="/goods/:id" element={<div><NavBar /><Search /><Main /></div>} />