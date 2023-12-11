import supabase from "@/config/supabaseClient";
import { BookingDataTypes } from "./types";

export async function setNewBooking(bookingData: BookingDataTypes) {
  try {
    const { data, error } = await supabase.rpc("newbooking", {
      ...bookingData,
    });

    if (error) {
      throw new Error("Failed to create a new booking");
    }

    return data;
  } catch (error) {
    // Handle any other potential errors or log them if necessary
    throw new Error("An unexpected error occurred");
  }
}
