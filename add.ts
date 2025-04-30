// add.ts
const { createClient } = require("@supabase/supabase-js");
// Use your actual Supabase credentials from .env file
const SUPABASE_URL = "https://vnfbbslwkvkvzcjczsua.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZuZmJic2x3a3ZrdnpjamN6c3VhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwNDQ5NjAsImV4cCI6MjA2MTYyMDk2MH0.HnoigOcA0SCzdacXKaZHTk5CjPIIJb-2Z-1xSUQ8n5A";

// Initialize Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function addQuestion() {
    // Insert a new question into the FAQ table
    const { data, error } = await supabase
        .from("faq")
        .insert({
            question: "How do I reset my password?",
            answer: "To reset your password, click on the 'Forgot Password' link on the login page and follow the instructions sent to your email."
        });

    if (error) {
        console.error("Error adding question:", error);
    } else {
        console.log("Question added successfully:", data);
    }
}

// Run the function
addQuestion();