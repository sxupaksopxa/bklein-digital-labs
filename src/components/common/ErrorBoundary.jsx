import React from "react";
import Button from "./Button.jsx";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
          <h1 className="text-3xl font-bold text-slate-950">Something went wrong</h1>
          <p className="mt-4 max-w-md text-slate-600">
            An unexpected error occurred. Please try refreshing the page or return home.
          </p>
          <div className="mt-8">
            <Button to="/">Back to home</Button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
