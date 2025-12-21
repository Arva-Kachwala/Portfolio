"use server";

// Frontend-only: All backend functions stubbed out (backend removed)
import { type CurrentlyPlaying } from "./spotify";

type ReactionType = "like" | "heart" | "celebrate" | "insightful";

type CreateContactResponse = {
  success: boolean;
  error?: string;
};

// Stub: Returns 0 view count (backend disabled)
export async function incrementViewCount(slug: string) {
  return 0;
}

// Stub: Returns empty reaction counts (backend disabled)
export async function getArticleReactions(slug: string) {
  return {
    like: 0,
    heart: 0,
    celebrate: 0,
    insightful: 0,
  };
}

// Stub: Returns empty array (backend disabled)
export async function getUserReactions(slug: string) {
  return [];
}

// Stub: Returns failure response (backend disabled)
export async function toggleReaction(slug: string, reactionType: ReactionType) {
  return { 
    success: false, 
    message: 'Backend functionality disabled' 
  };
}

// Stub: Returns failure response (backend disabled)
export async function createContact(email: string): Promise<CreateContactResponse> {
  return { success: false, error: "Backend functionality disabled" };
}

// Stub: Returns null (backend disabled)
export async function getCurrentlyPlaying(): Promise<CurrentlyPlaying | null> {
  return null;
} 