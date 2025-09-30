"use client";
import React from "react";

import {
  Pin,
  Flame,
  MoreVertical,
  Users,
  MessageCircle,
  Eye,
  ArrowUp,
  Clock,
  Zap,
  ChevronRight,
} from "lucide-react";
import { ThreadData } from "../../utils/mock-threads-data";
import { COLORS } from "../theme";

// what props this component needs
type ThreadCardProps = {
  thread: ThreadData; // the thread data to display
};

// format numbers with commas (1000 -> 1,000)
function formatNumber(num: number): string {
  return new Intl.NumberFormat().format(num);
}

// calculate how much of the goal is completed (returns 0-100)
function getProgressPercentage(current: number, goal: number): number {
  if (goal <= 0) return 0; // avoid division by zero
  const percentage = (current / goal) * 100;
  return Math.min(percentage, 100); // cap at 100%
}

// main component - shows one thread card
function ThreadCard({ thread }: ThreadCardProps) {
  // safety check - don't crash if no thread data
  if (!thread) {
    console.error("ThreadCard received undefined thread data.");
    return null;
  }

  // calculate progress bar percentage
  const progressPercent = getProgressPercentage(
    thread.currentTokens,
    thread.goalTokens
  );

  return (
    // main card container
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-shadow hover:shadow-xl">
      {/* top image section */}
      <div className="relative w-full aspect-video">
        {/* main thread image */}
        <img
          src={thread.imageUrl}
          alt={thread.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            // show fallback image if main image fails to load
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://placehold.co/800x400/cccccc/333333?text=Image+Missing";
          }}
        />

        {/* badges on top left of image */}
        <div className="absolute top-3 left-3 flex space-x-2">
          {/* show pinned badge if thread is pinned */}
          {thread.isPinned && (
            <div className="flex items-center px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full shadow-md">
              <Pin className="w-3 h-3 mr-1" />
              Pinned
            </div>
          )}
          {/* show hot badge if thread is hot */}
          {thread.isHot && (
            <div className="flex items-center px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full shadow-md">
              <Flame className="w-3 h-3 mr-1" />
              Hot
            </div>
          )}
        </div>

        {/* settings button on top right */}
        <button className="absolute top-3 right-3 p-2 bg-black/40 backdrop-blur-sm text-white rounded-full transition hover:bg-black/60">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      {/* main content area */}
      <div className="p-4 sm:p-5">
        {/* thread title */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
          {thread.title}
        </h2>
        {/* thread description */}
        <p className="text-sm text-gray-500 mb-4">{thread.description}</p>

        {/* stats row with icons and numbers */}
        <div className="flex items-center justify-between flex-wrap text-sm text-gray-500 border-b pb-4 mb-4">
          <div className="flex items-center space-x-4">
            {/* people who contributed */}
            <span className="flex items-center">
              <Users className="w-4 h-4 mr-1 text-purple-500" />
              {formatNumber(thread.contributions)}
            </span>
            {/* comment count */}
            <span className="flex items-center">
              <MessageCircle className="w-4 h-4 mr-1 text-gray-400" />
              {formatNumber(thread.comments)}
            </span>
            {/* view count */}
            <span className="flex items-center">
              <Eye className="w-4 h-4 mr-1 text-gray-400" />
              {formatNumber(thread.views)}
            </span>
            {/* upvote count */}
            <span className="flex items-center">
              <ArrowUp className="w-4 h-4 mr-1 text-green-500" />
              {formatNumber(thread.upvotes)}
            </span>
          </div>
          {/* when this was posted */}
          <span className="flex items-center mt-2 sm:mt-0">
            <Clock className="w-4 h-4 mr-1 text-gray-400" />
            {thread.timeAgo}
          </span>
        </div>

        {/* token progress section */}
        <div className="mb-4">
          {/* progress label and numbers */}
          <div className="flex justify-between items-center mb-1 text-sm font-medium">
            <span className="text-gray-700">Boost Progress</span>
            <span className="text-purple-600 font-semibold">
              {formatNumber(thread.currentTokens)} /{" "}
              {formatNumber(thread.goalTokens)} tokens
            </span>
          </div>
          {/* progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-purple-500 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }} // set width based on progress
            ></div>
          </div>
        </div>

        {/* category tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {thread.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium text-purple-700 bg-purple-100 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* action buttons at bottom */}
        <div className="flex space-x-3">
          {/* contribute button */}
          <button className="flex-1 flex items-center justify-center px-4 py-3 bg-gray-50 text-gray-700 font-semibold rounded-xl transition hover:bg-gray-100">
            <Zap className="w-5 h-5 mr-2" />
            Contribute
          </button>
          {/* view thread button */}
          <button className="flex-1 flex items-center justify-center px-4 py-3 bg-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/50 transition hover:bg-purple-700">
            View Thread
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThreadCard;
