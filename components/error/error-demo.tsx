"use client";

import { useState } from "react";

import Card from "@/components/ui/card";

import ErrorMessage from "@/components/ui/error-message";
import { useFetch } from "@/hooks/useFetch";
import LoadingSpinner from "../ui/loading-spinner";
import type { Post } from "@/types/posts";
import Button from "../ui/button";

export default function ErrorDemo() {
  const [triggerError, setTriggerError] = useState(false);
  const [simulateNetworkError, setSimulateNetworkError] = useState(false);

  // Intentional error demo - invalid endpoint
  const { data, loading, error, refetch } = useFetch<Post[]>(
    triggerError
      ? "https://jsonplaceholder.typicode.com/invalid-endpoint"
      : simulateNetworkError
        ? "https://invalid-domain-that-does-not-exist.com/posts"
        : "https://jsonplaceholder.typicode.com/posts?_limit=3",
    { immediate: triggerError || simulateNetworkError },
  );

  const handleTriggerError = () => {
    setTriggerError(true);
    setSimulateNetworkError(false);
  };

  const handleNetworkError = () => {
    setSimulateNetworkError(true);
    setTriggerError(false);
  };

  const handleReset = () => {
    setTriggerError(false);
    setSimulateNetworkError(false);
  };

  const ThrowError = () => {
    throw new Error("This is an intentional component error for testing!");
  };

  const [showComponentError, setShowComponentError] = useState(false);

  return (
    <div className="space-y-6">
      <Card>
        <h3 className="text-foreground mb-4 text-lg font-semibold">
          Error Handling Demo
        </h3>
        <p className="text-muted-foreground mb-4">
          Test different error scenarios to see how the application handles them
          gracefully.
        </p>

        <div className="relative mb-6 flex flex-wrap gap-3">
          <Button hover onClick={handleTriggerError}>
            Trigger API Error (404)
          </Button>

          <Button hover onClick={handleNetworkError}>
            Network Error
          </Button>

          <Button hover onClick={() => setShowComponentError(true)}>
            Component Error
          </Button>

          <Button
            className="text-background bg-white"
            hover
            onClick={handleReset}
          >
            Reset
          </Button>
        </div>

        {/* Error Demo Results */}
        <div className="border-border bg-muted/20 rounded-lg border p-4">
          <h4 className="text-foreground mb-3 font-medium">Demo Results:</h4>

          {showComponentError && <ThrowError />}

          {loading && (
            <div className="flex items-center gap-2">
              <LoadingSpinner size="sm" />
              <span className="text-muted-foreground">Loading...</span>
            </div>
          )}

          {error && (
            <ErrorMessage
              message={error}
              onRetry={() => {
                refetch();
                handleReset();
              }}
            />
          )}

          {data && !loading && !error && (
            <div className="text-green-600">
              ✅ Successfully loaded {Array.isArray(data) ? data.length : 1}{" "}
              items
            </div>
          )}

          {!triggerError &&
            !simulateNetworkError &&
            !loading &&
            !error &&
            !data && (
              <div className="text-muted-foreground">
                Click a button above to test error handling
              </div>
            )}
        </div>
      </Card>
    </div>
  );
}
