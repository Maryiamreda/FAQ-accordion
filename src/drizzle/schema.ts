import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const faq = pgTable("faq", {
    id: serial("id").primaryKey(),
    question: text("question").notNull(),
    answer: text("answer").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
});