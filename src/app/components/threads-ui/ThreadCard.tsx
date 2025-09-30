"use client";
import React from "react";
import { useRouter } from "next/navigation"; // add this import
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
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ThreadData } from "../../../utils/mock-threads-data";

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
  const router = useRouter(); // add router for navigation

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

  // handle navigation to category page
  const handleViewThread = () => {
    router.push(`/threads/${thread.category}`);
  };

  // handle clicking on the whole card
  const handleCardClick = () => {
    router.push(`/threads/${thread.category}`);
  };

  return (
    // main card container - make it clickable
    <Card
      className="overflow-hidden border border-gray-100 transition-shadow hover:shadow-xl cursor-pointer"
      onClick={handleCardClick}
    >
      {/* top image section */}
      <CardHeader className="p-0">
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
              <Badge
                variant="default"
                className="bg-purple-600 hover:bg-purple-700"
              >
                <Pin className="w-3 h-3 mr-1" />
                Pinned
              </Badge>
            )}
            {/* show hot badge if thread is hot */}
            {thread.isHot && (
              <Badge variant="destructive">
                <Flame className="w-3 h-3 mr-1" />
                Hot
              </Badge>
            )}
          </div>

          {/* settings button on top right */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 rounded-full"
            onClick={(e) => {
              e.stopPropagation(); // prevent card click
              console.log("Settings clicked");
            }}
          >
            <MoreVertical className="w-5 h-5" />
          </Button>
        </div>
      </CardHeader>

      {/* main content area */}
      <CardContent className="p-4 sm:p-5">
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
          <div className="flex justify-between items-center mb-2 text-sm font-medium">
            <span className="text-gray-700">Boost Progress</span>
            <span className="text-purple-600 font-semibold">
              {formatNumber(thread.currentTokens)} /{" "}
              {formatNumber(thread.goalTokens)} tokens
            </span>
          </div>
          {/* progress bar using shadcn Progress */}
          <Progress value={progressPercent} className="h-2.5" />
        </div>

        {/* category tags using shadcn Badge */}
        <div className="flex flex-wrap gap-2 mb-6">
          {thread.tags.map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-purple-700 bg-purple-100 hover:bg-purple-200"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* action buttons at bottom using shadcn Button */}
        <div className="flex space-x-3">
          {/* contribute button */}
          <Button
            variant="outline"
            className="flex-1"
            onClick={(e) => {
              e.stopPropagation(); // prevent card click
              console.log("Contribute clicked");
            }}
          >
            <Zap className="w-5 h-5 mr-2" />
            Contribute
          </Button>
          {/* view thread button */}
          <Button
            className="flex-1 bg-purple-600 hover:bg-purple-700"
            onClick={(e) => {
              e.stopPropagation(); // prevent card click
              handleViewThread();
            }}
          >
            View Thread
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default ThreadCard;
