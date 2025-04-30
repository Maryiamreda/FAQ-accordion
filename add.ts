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
            question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
            answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
        });

    if (error) {
        console.error("Error adding question:", error);
    } else {
        console.log("Question added successfully:", data);
    }
}

// Run the function
addQuestion();