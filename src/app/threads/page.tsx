"use client";
import { useState } from "react";
import {
  Plus,
  Search,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ThreadCard from "../components/threads-ui/ThreadCard";
import { MOCK_THREADS, ThreadData } from "../../utils/mock-threads-data";
import AIAgentOverlay from "../components/threads-ui/AIAgentOverlay";
import CreateThreadsSection from "../components/threads-ui/CreateThreadsSection"; // add create thread section

import { COLORS } from "../theme";

// what filter options we have
type FilterType = "All" | "Hot" | "Newest";

// main page component - shows all threads
function ThreadsPage() {
  // which filter is currently selected
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  // whether ai chat is open or closed
  const [isAIOpen, setIsAIOpen] = useState(false);
  // whether create thread modal is open or closed
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  // current page for pagination
  const [currentPage, setCurrentPage] = useState(1);

  // how many threads to show per page
  const threadsPerPage = 6;

  // filter and sort threads based on selected filter
  const getFilteredThreads = (): ThreadData[] => {
    let filtered = [...MOCK_THREADS]; // copy the array

    switch (activeFilter) {
      case "All":
        return filtered; // show everything
      case "Hot":
        return filtered
          .filter((thread) => thread.isHot) // only hot threads
          .sort((a, b) => b.upvotes - a.upvotes); // sort by most upvotes
      case "Newest":
        return filtered.sort((a, b) => {
          // convert time strings to minutes for sorting
          const getMinutes = (timeAgo: string) => {
            if (timeAgo.includes("m")) return parseInt(timeAgo); // minutes
            if (timeAgo.includes("h")) return parseInt(timeAgo) * 60; // hours to minutes
            if (timeAgo.includes("d")) return parseInt(timeAgo) * 1440; // days to minutes
            return 0;
          };
          return getMinutes(a.timeAgo) - getMinutes(b.timeAgo); // newest first
        });
      default:
        return filtered;
    }
  };

  // get all filtered threads
  const allFilteredThreads = getFilteredThreads();

  // calculate pagination
  const totalPages = Math.ceil(allFilteredThreads.length / threadsPerPage);
  const startIndex = (currentPage - 1) * threadsPerPage;
  const endIndex = startIndex + threadsPerPage;

  // get threads for current page
  const currentThreads = allFilteredThreads.slice(startIndex, endIndex);

  // reset to page 1 when filter changes
  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  // handle create thread button click - open modal
  const handleCreateThread = () => {
    setIsCreateOpen(true);
  };

  // go to previous page
  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  // go to next page
  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  // go to specific page
  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="p-4 md:p-8 pb-40 mb-25">
          {" "}
          {/* added bottom padding to avoid footer */}
          {/* ai search bar at top - click to open ai chat */}
          <div
            onClick={() => setIsAIOpen(true)}
            className="w-full mb-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl cursor-pointer hover:shadow-md transition-all duration-200 group"
          >
            <div className="flex items-center space-x-3">
              {/* sparkles icon */}
              <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors">
                <Sparkles className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1">
                {/* search text */}
                <div className="flex items-center space-x-2">
                  <Search className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-500 text-sm sm:text-base">
                    Ask AI anything about marketplace trends, products, or get
                    personalized recommendations...
                  </span>
                </div>
                {/* status indicator */}
                <p className="text-xs text-purple-600 mt-1 flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  AI Agent ready • Proactive mode enabled
                </p>
              </div>
            </div>
          </div>
          {/* page title and create button */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-2">
            <div>
              {/* main page title */}
              <h1 className="text-2xl sm:text-3xl font-bold">
                Community Threads
              </h1>
              {/* subtitle explaining tokens */}
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                Contribute tokens to boost threads and unlock premium features
              </p>
            </div>
            {/* create new thread button */}
            <button
              onClick={handleCreateThread}
              className="flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2 bg-purple-600 text-white font-medium sm:font-semibold text-sm sm:text-base rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-200"
            >
              <Plus className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
              {/* show full text on larger screens, short on mobile */}
              <span className="hidden xs:inline">Create Thread</span>
              <span className="xs:hidden">Create</span>
            </button>
          </div>
          {/* filter buttons */}
          <div className="p-3 sm:p-4 flex flex-wrap gap-2 bg-white rounded-xl shadow-sm mb-6 mt-6">
            {(["All", "Hot", "Newest"] as FilterType[]).map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium sm:font-semibold transition-colors duration-200 ${
                  filter === activeFilter
                    ? "bg-purple-100 text-purple-700 shadow-inner" // active style
                    : "text-gray-600 hover:bg-gray-50 border border-transparent" // inactive style
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          {/* show how many threads and current filter with pagination controls */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
            <p className="text-sm sm:text-base text-gray-600">
              Showing {currentThreads.length} of {allFilteredThreads.length}{" "}
              threads
              {activeFilter !== "All" && ` • Filter: ${activeFilter}`}
              {totalPages > 1 && ` • Page ${currentPage} of ${totalPages}`}
            </p>

            {/* pagination controls - moved up here */}
            {totalPages > 1 && (
              <div className="flex items-center space-x-2">
                {/* previous button */}
                <button
                  onClick={goToPreviousPage}
                  disabled={currentPage === 1}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </button>

                {/* page numbers */}
                <div className="flex space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => goToPage(page)}
                        className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                          page === currentPage
                            ? "bg-purple-600 text-white"
                            : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {page}
                      </button>
                    )
                  )}
                </div>

                {/* next button */}
                <button
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            )}
          </div>
          {/* grid of thread cards */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentThreads.map((thread) => (
              <ThreadCard key={thread.id} thread={thread} />
            ))}
          </div>
        </div>
      </div>

      {/* ai chat overlay - shows when isAIOpen is true */}
      <AIAgentOverlay isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />

      {/* create thread modal - shows when isCreateOpen is true */}
      <CreateThreadsSection
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
      />
    </>
  );
}

export default ThreadsPage;
