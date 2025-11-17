import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiSun,
  FiMoon,
  FiArrowRight,
  FiCheckCircle,
  FiClipboard
} from "react-icons/fi";

// LIGHT + DARK THEMES
const theme = {
  light: {
    bg: "#FAF7F2",
    text: "#1C1C1C",
    card: "#FFFFFF",
    border: "#E8E2D9",
    accent: "#0B1B2B",
    soft: "#DAD7D1"
  },
  dark: {
    bg: "#0B1B2B",
    text: "#FAF7F2",
    card: "#1C1C1C",
    border: "#2A2A2A",
    accent: "#6f4432ff",
    soft: "#8E8B85"
  }
};


/* ───────────────────────── NAVBAR ───────────────────────── */

function Navbar({ dark, setDark, colors }) {
  return (
    <div style={{ position: "sticky", top: 0, zIndex: 20 }}>
      {/* shadow behind nav */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          boxShadow: "0 14px 30px rgba(0,0,0,0.22)",
          opacity: 0.45,
          transform: "translateY(6px)",
          filter: "blur(6px)"
        }}
      />
      {/* nav container */}
      <div
        style={{
          backdropFilter: "blur(18px)",
          background: dark
            ? "rgba(11, 27, 43, 0.92)"
            : "rgba(250, 247, 242, 0.92)",
          borderBottom: `1px solid ${colors.border}`,
          display: "flex",
          padding: "14px 32px",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative"
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: colors.accent,
            fontWeight: 700,
            fontSize: "22px",
            letterSpacing: "0.12em",
            textTransform: "uppercase"
          }}
        >
          AI OUTREACH PLAYBOOK
        </Link>

        <div style={{ display: "flex", gap: "18px", alignItems: "center" }}>
          <Link style={navItem(colors)} to="/step1">Flow</Link>
          <Link style={navItem(colors)} to="/personalization">Personalization</Link>
          <Link style={navItem(colors)} to="/objections">Objections</Link>
          <Link style={navItem(colors)} to="/retro">Weekly retro</Link>

          <button
            onClick={() => setDark(!dark)}
            style={{
              background: colors.accent,
              color: colors.text,
              border: "none",
              padding: "8px 11px",
              borderRadius: "999px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            aria-label="Toggle dark mode"
          >
            {dark ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
}

function navItem(colors) {
  return {
    color: colors.text,
    textDecoration: "none",
    fontSize: "14px",
    padding: "6px 10px",
    borderRadius: "999px",
    border: `1px solid transparent`,
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    fontWeight: 500,
    transition: "all 0.18s ease",
    cursor: "pointer"
  };
}
/* ───────────────────────── HANDWRITING + STICKY ELEMENTS ───────────────────────── */

function Scribble({ children, style }) {
  return (
    <span
      style={{
        fontFamily: "'Nothing You Could Do', cursive",
        fontSize: "18px",
        opacity: 0.55,
        ...style
      }}
    >
      {children}
    </span>
  );
}

function Sticky({ colors, children, style }) {
  return (
    <div
      style={{
        position: "absolute",
        background: colors.card,
        padding: "10px 14px",
        borderRadius: "10px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.18)",
        border: `1px solid ${colors.border}`,
        transform: "rotate(-2deg)",
        fontSize: "13px",
        maxWidth: "140px",
        ...style
      }}
    >
      {children}
    </div>
  );
}
/* ───────────────────────── HOME PAGE ───────────────────────── */

function Home({ colors }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div
        style={{
          padding: "80px 40px 90px",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div style={{ maxWidth: "880px", width: "100%", position: "relative" }}>
          {/* shadow card */}
          <div
            style={{
              position: "absolute",
              inset: "18px -18px -18px 18px",
              backgroundColor: colors.soft,
              opacity: 0.4,
              borderRadius: "18px",
              transform: "rotate(-0.7deg)"
            }}
          />

          <div
            style={{
              position: "relative",
              background: colors.card,
              borderRadius: "22px",
              padding: "44px 40px 40px",
              border: `1px solid ${colors.border}`,
              boxShadow: "0 20px 50px rgba(0,0,0,0.16)",
              overflow: "hidden"
            }}
          >
            {/* scribbles */}
            <Scribble style={{ position: "absolute", top: 10, right: 20 }}>
              ✧ start here
            </Scribble>
            <Scribble style={{ position: "absolute", bottom: 10, left: 22 }}>
              vol. 01
            </Scribble>

            <p
              style={{
                fontFamily: "'Nothing You Could Do', cursive",
                fontSize: "20px",
                color: colors.accent,
                marginBottom: "8px"
              }}
            >
              for teams, freelancers & founders
            </p>

            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "44px",
                fontWeight: 700,
                lineHeight: 1.12
              }}
            >
              Design smarter outreach in 15 minutes{" "}
              <span
                style={{
                  fontFamily: "'Nothing You Could Do', cursive",
                  fontSize: "26px"
                }}
              >
                with AI
              </span>
            </h1>

            <p
              style={{
                maxWidth: "640px",
                fontSize: "18px",
                lineHeight: 1.7,
                marginBottom: "26px"
              }}
            >
              A calm, structured flow to turn AI into your outreach copilot — from quick
              company research to a tight email + DM + follow-up.
            </p>

            <div style={{ display: "flex", gap: "18px" }}>
              <Link to="/step1">
                <button style={primaryBtn(colors)}>
                  Start the 5-step flow <FiArrowRight />
                </button>
              </Link>

              <span
                style={{
                  fontFamily: "'Nothing You Could Do', cursive",
                  fontSize: "18px",
                  color: colors.accent
                }}
              >
                ~ bring your own product + ICP ✧
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* Buttons */

function primaryBtn(colors) {
  return {
    background: colors.accent,
    color: "#FAF7F2",
    border: "none",
    padding: "16px 24px",
    borderRadius: "999px",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
    fontWeight: 600
  };
}

function copyBtn(colors) {
  return {
    background: "transparent",
    color: colors.accent,
    border: `1px dashed ${colors.accent}`,
    padding: "8px 14px",
    borderRadius: "999px",
    marginTop: "12px",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    cursor: "pointer",
    fontSize: "13px",
    textTransform: "uppercase",
    letterSpacing: "0.14em"
  };
}
/* ───────────────────────── STEP TEMPLATE (Shared Layout) ───────────────────────── */

function StepTemplate({ colors, icon, title, desc, prompt, next, note, sticky }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}>
      <div
        style={{
          padding: "60px 40px",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div style={{ maxWidth: "900px", width: "100%", position: "relative" }}>
          {/* shadow */}
          <div
            style={{
              position: "absolute",
              inset: "24px -18px -18px 18px",
              backgroundColor: colors.soft,
              borderRadius: "18px",
              opacity: 0.5,
              transform: "rotate(-0.8deg)"
            }}
          />

          {/* main card */}
          <div
            style={{
              position: "relative",
              background: colors.card,
              borderRadius: "18px",
              padding: "34px 34px 50px",
              border: `1px solid ${colors.border}`,
              boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
              overflow: "visible"
            }}
          >
            {/* top scribble */}
            <Scribble style={{ position: "absolute", top: 10, right: 20 }}>
              ✦ step guide
            </Scribble>

            {/* bottom handwriting */}
            <Scribble style={{ position: "absolute", bottom: 12, left: 20 }}>
              {note}
            </Scribble>

            {/* sticky notes */}
            {sticky?.top && (
              <Sticky
                colors={colors}
                style={{
                  top: "110px",
                  right: "26px"
                }}
              >
                {sticky.top}
              </Sticky>
            )}

            {sticky?.bottom && (
              <Sticky
                colors={colors}
                style={{
                  bottom: "-34px",
                  left: "24px"
                }}
              >
                {sticky.bottom}
              </Sticky>
            )}

            {/* header */}
            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              {icon}
              <p
                style={{
                  fontFamily: "'Nothing You Could Do', cursive",
                  fontSize: "17px",
                  color: colors.accent
                }}
              >
                AI outreach playbook · step
              </p>
            </div>

            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "36px",
                fontWeight: 700,
                marginTop: "6px"
              }}
            >
              {title}
            </h1>

            <p
              style={{
                fontSize: "17px",
                maxWidth: "700px",
                lineHeight: 1.7,
                marginTop: "4px",
                marginBottom: "24px"
              }}
            >
              {desc}
            </p>

            {/* prompt box */}
            <div
              style={{
                background: colors.bg,
                borderRadius: "14px",
                padding: "18px 20px",
                border: `1px dashed ${colors.border}`,
                marginBottom: "24px",
                position: "relative"
              }}
            >
              <h3
                style={{
                  fontSize: "14px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: colors.accent
                }}
              >
                ChatGPT prompt
              </h3>

              <pre
                style={{
                  whiteSpace: "pre-wrap",
                  fontSize: "14px",
                  lineHeight: 1.6
                }}
              >
                {prompt}
              </pre>

              <button style={copyBtn(colors)} onClick={handleCopy}>
                <FiClipboard size={14} />
                {copied ? "Copied ✓" : "Copy prompt"}
              </button>
            </div>

            {/* next button */}
            <Link to={next}>
              <button style={primaryBtn(colors)}>
                Continue <FiArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
/* ───────────────────────── STEP DEFINITIONS ───────────────────────── */

function Step1({ colors }) {
  return (
    <StepTemplate
      colors={colors}
      icon={<FiCheckCircle size={50} color={colors.accent} />}
      title="Step 1 — Quick Snapshot (0–3 min)"
      desc="A super-fast overview of the company: role, goals, pains, triggers."
      prompt={`Be an SDR for your company. In 5 bullets, tell me for [company] + [role]:
1. What they do
2. 2–3 likely role goals
3. 2 pains you solve
4. 1 relevant trigger
5. Fit score 1–5 with reason`}
      next="/step2"
      note="start broad → go sharper"
      sticky={{
        top: "ICP basics",
        bottom: "pain points → angles"
      }}
    />
  );
}

function Step2({ colors }) {
  return (
    <StepTemplate
      colors={colors}
      icon={<FiCheckCircle size={50} color={colors.accent} />}
      title="Step 2 — Company Summary (2–5 min)"
      desc="Turn Step 1 insights into a clean 6–8 line summary."
      prompt={`Create a 6–8 line summary including:
• What they do
• Core product
• Audience
• Differentiators
• Brand tone`}
      next="/step3"
      note="clarity beats length"
      sticky={{
        top: "brand tone notes",
        bottom: "don’t over-explain"
      }}
    />
  );
}

function Step3({ colors }) {
  return (
    <StepTemplate
      colors={colors}
      icon={<FiCheckCircle size={50} color={colors.accent} />}
      title="Step 3 — Trigger Line (5–10 min)"
      desc="Find a timely, real reason to reach out today."
      prompt={`Pick one trigger: hiring, launch, funding, leadership change, blog post, migration.
Write:
“Noticed X recently — often when teams do that, Y becomes a priority.”`}
      next="/step4"
      note="good outreach = good timing"
      sticky={{
        top: "check their LinkedIn ✧",
        bottom: "timing = leverage"
      }}
    />
  );
}

function Step4({ colors }) {
  return (
    <StepTemplate
      colors={colors}
      icon={<FiCheckCircle size={50} color={colors.accent} />}
      title="Step 4 — Personalization + QA"
      desc="Add one human detail + run the 6-point clarity check."
      prompt={`Add one personal detail. Then check:
✔ clarity
✔ specificity
✔ relevance
✔ brevity
✔ credibility
✔ one clear ask`}
      next="/step5"
      note="one human detail → huge lift"
      sticky={{
        top: "find 1 detail only",
        bottom: "clarity > charm"
      }}
    />
  );
}

function Step5({ colors }) {
  return (
    <StepTemplate
      colors={colors}
      icon={<FiCheckCircle size={50} color={colors.accent} />}
      title="Final Step — Outreach Draft"
      desc="Assemble everything into a clean, <90 word message."
      prompt={`Write:
• intro
• trigger
• insight
• pain → offer
• 1 clear ask
Under 90 words.`}
      next="/retro"
      note="keep it tight & human"
      sticky={{
        top: "≤ 90 words",
        bottom: "one ask only"
      }}
    />
  );
}
/* ───────────────────────── WEEKLY RETRO ───────────────────────── */

function WeeklyRetro({ colors }) {
  const retroPrompt = `
I’ll paste 3–5 outreach messages I sent this week + the replies.

Help me:
1) Spot patterns in what landed vs. flopped
2) Suggest 2–3 tiny tweaks to test next week
3) Keep my tone: warm, curious, human.
`;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div
        style={{
          padding: "60px 40px",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            width: "100%",
            position: "relative"
          }}
        >
          {/* shadow layer */}
          <div
            style={{
              position: "absolute",
              inset: "18px -18px -18px 18px",
              backgroundColor: colors.soft,
              opacity: 0.4,
              borderRadius: "18px",
              transform: "rotate(-0.6deg)"
            }}
          />

          {/* main card */}
          <div
            style={{
              position: "relative",
              background: colors.card,
              borderRadius: "20px",
              padding: "40px 40px 50px",
              border: `1px solid ${colors.border}`,
              boxShadow: "0 16px 40px rgba(0,0,0,0.16)",
              overflow: "hidden"
            }}
          >
            <Scribble style={{ position: "absolute", top: 10, right: 22 }}>
              weekly rhythm → not pressure
            </Scribble>

            <Scribble style={{ position: "absolute", bottom: 16, left: 22 }}>
              tiny tweaks → better weeks
            </Scribble>

            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "42px",
                fontWeight: 700,
                marginBottom: "14px"
              }}
            >
              Weekly Retro
            </h1>

            <p
              style={{
                maxWidth: "660px",
                fontSize: "18px",
                lineHeight: 1.7,
                marginBottom: "32px"
              }}
            >
              A soft reflection to end your week — what worked, what didn’t, and what you
              want to adjust with intention.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
                gap: "24px",
                alignItems: "flex-start"
              }}
            >
              {/* reflection prompts */}
              <div>
                <h2
                  style={{
                    fontSize: "17px",
                    fontWeight: 600,
                    marginBottom: "10px"
                  }}
                >
                  Reflection prompts
                </h2>

                <ol
                  style={{
                    paddingLeft: "22px",
                    fontSize: "16px",
                    lineHeight: 1.7
                  }}
                >
                  <li>Which message or angle got the best reactions?</li>
                  <li>Where did you feel “most you” in your tone?</li>
                  <li>What felt off, forced, or too scripted?</li>
                  <li>What would you like to try differently next week?</li>
                  <li>One sentence that captures your week.</li>
                </ol>
              </div>

              {/* prompt box */}
              <div
                style={{
                  background: colors.bg,
                  borderRadius: "14px",
                  padding: "18px 22px",
                  border: `1px dashed ${colors.border}`
                }}
              >
                <h3
                  style={{
                    fontSize: "14px",
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    color: colors.accent,
                    marginBottom: "6px"
                  }}
                >
                  ChatGPT prompt
                </h3>

                <pre
                  style={{
                    whiteSpace: "pre-wrap",
                    fontSize: "14px",
                    lineHeight: 1.6,
                    marginBottom: "12px"
                  }}
                >
{retroPrompt}
                </pre>

                {/* no copy button by your preference, but we can add later */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
/* ───────────────────────── OBJECTIONS ───────────────────────── */

function Objections({ colors }) {
  const [activePrompt, setActivePrompt] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!activePrompt) return;
    navigator.clipboard.writeText(activePrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  const prompts = [
    {
      label: "“We’re already using another tool.”",
      prompt: `They said: "We’re already using another tool."

Write a short, respectful reply that:
• acknowledges their current choice
• asks 1 curious question about gaps or future needs
• offers a tiny next step (1–2 use cases)

Tone: warm, calm, non-pushy. Max 70 words.`
    },
    {
      label: "“Now’s not a good time.”",
      prompt: `They said: "Now’s not a good time."

Write a reply that:
• respects their timing
• suggests 1 future trigger for reconnecting
• offers 1 helpful resource (no pressure)

Tone: gentle, human-first. Max 70 words.`
    },
    {
      label: "“We don’t have budget.”",
      prompt: `They said: "We don’t have budget."

Write a reply that:
• acknowledges the constraint
• asks 1 question on what WOULD be worth investing in
• positions my product as time-saving, risk-reducing, or revenue-generating

Tone: empathetic, curious. Max 75 words.`
    },
    {
      label: "“Just send me some info.”",
      prompt: `They said: "Just send me some info."

Write a reply that:
• agrees to send info
• asks 1 clarifying question so it’s tailored
• offers 3 options: short deck, Loom, or 10-min walkthrough

Tone: light, organized. Max 75 words.`
    },
    {
      label: "No reply after first email",
      prompt: `They didn’t reply after my first message.

Write a follow-up that:
• assumes positive intent
• adds 1 new piece of value (micro-insight or example)
• reduces friction: ask 1 tiny question

Tone: soft, non-guilty. Under 70 words.`
    },
    {
      label: "“We do this in-house.”",
      prompt: `They said: "We already do this in-house."

Write a reply that:
• respects their team
• asks where they MOST want leverage
• explains how we support without replacing their people

Tone: collaborative, respectful. Max 75 words.`
    },
    {
      label: "“Can you lower the price?”",
      prompt: `They asked for a lower price.

Write a reply that:
• acknowledges the ask
• protects product value
• offers an alternative: scope, timing, or pilot

Tone: confident, kind. Max 80 words.`
    },
    {
      label: "“This isn’t a priority right now.”",
      prompt: `They said: "This isn’t a priority right now."

Write a reply that:
• accepts their priorities
• asks what IS top priority
• gives 1 example of helping similar teams

Tone: curious, grounded. Max 70 words.`
    },
    {
      label: "“We tried something like this before.”",
      prompt: `They said: "We tried something like this before."

Write a reply that:
• validates their past experience
• asks what didn’t work last time
• shows 1–2 ways we’re different

Tone: honest, non-defensive. Max 80 words.`
    },
    {
      label: "“Can you send me a deck?”",
      prompt: `They said: "Can you send me a deck?"

Write a reply that:
• happily agrees
• asks 1 question to tailor the deck
• suggests optional 10-min walk-through

Tone: helpful, organized. Max 75 words.`
    }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div
        style={{
          padding: "60px 40px",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div style={{ maxWidth: "980px", width: "100%", position: "relative" }}>
          {/* shadow card */}
          <div
            style={{
              position: "absolute",
              inset: "18px -18px -18px 18px",
              backgroundColor: colors.soft,
              opacity: 0.4,
              borderRadius: "18px",
              transform: "rotate(-0.8deg)"
            }}
          />

          {/* main card */}
          <div
            style={{
              position: "relative",
              background: colors.card,
              borderRadius: "20px",
              padding: "32px 32px 40px",
              border: `1px solid ${colors.border}`,
              boxShadow: "0 16px 40px rgba(0,0,0,0.16)",
              overflow: "hidden"
            }}
          >
            <Scribble style={{ position: "absolute", top: 10, right: 24 }}>
              it’s a conversation, not a contest
            </Scribble>

            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "40px",
                fontWeight: 700,
                marginBottom: "10px"
              }}
            >
              Objection Handling
            </h1>

            <p
              style={{
                maxWidth: "620px",
                fontSize: "18px",
                lineHeight: 1.7,
                marginBottom: "28px"
              }}
            >
              These aren’t scripts — they’re calm starting points to help you stay warm,
              clear, and respectful even when the answer feels like a “no.”
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1.3fr) minmax(0, 1fr)",
                gap: "24px",
                alignItems: "flex-start"
              }}
            >
              {/* Objection List */}
              <div>
                <h2 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "10px" }}>
                  Pick the objection you heard:
                </h2>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "10px"
                  }}
                >
                  {prompts.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => {
                        setActivePrompt(item.prompt);
                        setCopied(false);
                      }}
                      style={{
                        padding: "10px 12px",
                        textAlign: "left",
                        borderRadius: "999px",
                        border:
                          activePrompt === item.prompt
                            ? `1px solid ${colors.accent}`
                            : `1px solid ${colors.border}`,
                        background:
                          activePrompt === item.prompt
                            ? "rgba(0,0,0,0.04)"
                            : "transparent",
                        fontSize: "13px",
                        cursor: "pointer"
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Prompt Box */}
              <div
                style={{
                  background: colors.bg,
                  borderRadius: "14px",
                  padding: "20px",
                  border: `1px dashed ${colors.border}`,
                  minHeight: "240px"
                }}
              >
                <h3
                  style={{
                    fontSize: "14px",
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    color: colors.accent,
                    marginBottom: "8px"
                  }}
                >
                  ChatGPT prompt
                </h3>

                <pre
                  style={{
                    whiteSpace: "pre-wrap",
                    fontSize: "14px",
                    lineHeight: 1.6,
                    minHeight: "150px"
                  }}
                >
                  {activePrompt ||
                    "Select an objection to see a tailored ChatGPT prompt."}
                </pre>

                <button
                  style={{
                    ...copyBtn(colors),
                    opacity: activePrompt ? 1 : 0.4,
                    pointerEvents: activePrompt ? "auto" : "none"
                  }}
                  onClick={handleCopy}
                >
                  <FiClipboard size={14} />
                  {copied ? "Copied ✓" : "Copy prompt"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
/* ───────────────────────── PERSONALIZATION ───────────────────────── */

function Personalization({ colors }) {
  const [copiedIdx, setCopiedIdx] = useState(null);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const personalizationLines = [
    `I’ve been following what you and your team are building — it genuinely intrigues me, and I just wanted to say that out loud.`,
    `Your work feels so streamlined and intentional; it honestly gives me more motivation to learn and level up on my side too.`,
    `Even if this isn’t the right timing, I’d still love to stay in touch and keep learning from how your team builds and decides.`,
    `The way your brand balances clarity and warmth really stood out to me — it’s such a rare, thoughtful mix.`,
    `I love how consistent your messaging feels across places; it quietly signals how much care goes into the work behind the scenes.`
  ];

  const handleCopyLine = (line, idx) => {
    navigator.clipboard.writeText(line);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1200);
  };

  const personalizationPrompt = `Rewrite this personalization line in my tone:
• warm  
• human-first  
• respectful  
• curious  
• aesthetic  
Keep it under 40 words.  
Line: [paste here]`;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(personalizationPrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 1200);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div
        style={{
          padding: "60px 40px",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div style={{ maxWidth: "980px", width: "100%", position: "relative" }}>
          {/* soft shadow */}
          <div
            style={{
              position: "absolute",
              inset: "18px -18px -18px 18px",
              backgroundColor: colors.soft,
              opacity: 0.35,
              borderRadius: "18px",
              transform: "rotate(-0.8deg)"
            }}
          />

          {/* main card */}
          <div
            style={{
              position: "relative",
              background: colors.card,
              borderRadius: "20px",
              padding: "34px 34px 40px",
              border: `1px solid ${colors.border}`,
              boxShadow: "0 16px 40px rgba(0,0,0,0.16)",
              overflow: "hidden"
            }}
          >
            <Scribble style={{ position: "absolute", top: 10, right: 24 }}>
              tiny details → big sincerity
            </Scribble>

            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "40px",
                fontWeight: 700,
                marginBottom: "10px"
              }}
            >
              Personalization
            </h1>

            <p
              style={{
                maxWidth: "640px",
                fontSize: "18px",
                lineHeight: 1.7,
                marginBottom: "24px"
              }}
            >
              Personalization isn’t about research depth — it’s about noticing.  
              The goal is to feel like a human reaching out to another human,  
              and quietly differentiate yourself from template-y senders.
            </p>

            {/* 3×3 Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "18px",
                marginBottom: "28px"
              }}
            >
              {/* People Signals */}
              <div
                style={{
                  background: colors.bg,
                  borderRadius: "16px",
                  padding: "16px 18px",
                  border: `1px solid ${colors.border}`,
                  transform: "rotate(-0.5deg)"
                }}
              >
                <h2 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "8px" }}>
                  1 · People signals
                </h2>
                <p style={{ fontSize: "14px", marginBottom: "6px" }}>
                  Start with how *they* show up:
                </p>
                <ul style={{ fontSize: "14px", paddingLeft: "18px", lineHeight: 1.6 }}>
                  <li>tone consistency in posts</li>
                  <li>warmth / clarity in their writing</li>
                  <li>phrases they repeat intentionally</li>
                  <li>what they sound genuinely excited about</li>
                </ul>
              </div>

              {/* Brand Signals */}
              <div
                style={{
                  background: colors.bg,
                  borderRadius: "16px",
                  padding: "16px 18px",
                  border: `1px solid ${colors.border}`,
                  transform: "rotate(0.6deg)"
                }}
              >
                <h2 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "8px" }}>
                  2 · Brand signals
                </h2>
                <p style={{ fontSize: "14px", marginBottom: "6px" }}>
                  Then scan how their *brand* expresses itself:
                </p>
                <ul style={{ fontSize: "14px", paddingLeft: "18px", lineHeight: 1.6 }}>
                  <li>simple vs. complex storytelling</li>
                  <li>clean / minimal or loud / playful</li>
                  <li>how they explain their product to outsiders</li>
                  <li>visual structure + clarity</li>
                </ul>
              </div>

              {/* Pattern Signals */}
              <div
                style={{
                  background: colors.bg,
                  borderRadius: "16px",
                  padding: "16px 18px",
                  border: `1px solid ${colors.border}`,
                  transform: "rotate(-0.3deg)"
                }}
              >
                <h2 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "8px" }}>
                  3 · Pattern signals
                </h2>
                <p style={{ fontSize: "14px", marginBottom: "6px" }}>
                  Finally, watch what keeps returning:
                </p>
                <ul style={{ fontSize: "14px", paddingLeft: "18px", lineHeight: 1.6 }}>
                  <li>themes they emphasize often</li>
                  <li>what they’re proud enough to pin</li>
                  <li>topics they revisit in talks or posts</li>
                  <li>what they’re clearly building toward</li>
                </ul>
              </div>
            </div>

            {/* Split layout: lines + prompt */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
                gap: "20px"
              }}
            >
              {/* Lines */}
              <div>
                <h2 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "8px" }}>
                  Aditi-style lines you can steal
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {personalizationLines.map((line, idx) => (
                    <div
                      key={idx}
                      style={{
                        borderRadius: "12px",
                        border: `1px solid ${colors.border}`,
                        padding: "10px 12px"
                      }}
                    >
                      <p style={{ fontSize: "14px", lineHeight: 1.6 }}>{line}</p>
                      <button
                        style={{ ...copyBtn(colors), padding: "4px 10px", fontSize: "11px" }}
                        onClick={() => handleCopyLine(line, idx)}
                      >
                        <FiClipboard size={12} />
                        {copiedIdx === idx ? "Copied ✓" : "Copy line"}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prompt */}
              <div
                style={{
                  background: colors.bg,
                  borderRadius: "14px",
                  padding: "18px 20px",
                  border: `1px dashed ${colors.border}`
                }}
              >
                <h3
                  style={{
                    fontSize: "14px",
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    color: colors.accent,
                    marginBottom: "6px"
                  }}
                >
                  ChatGPT prompt
                </h3>

                <pre
                  style={{
                    whiteSpace: "pre-wrap",
                    fontSize: "14px",
                    lineHeight: 1.6,
                    marginBottom: "10px"
                  }}
                >
                  {personalizationPrompt}
                </pre>

                <button style={copyBtn(colors)} onClick={handleCopyPrompt}>
                  <FiClipboard size={14} />
                  {copiedPrompt ? "Copied ✓" : "Copy prompt"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
/* ───────────────────────── END OF FILE ───────────────────────── */

export default function App() {
  const [dark, setDark] = useState(false);
  const colors = dark ? theme.dark : theme.light;

  const paperTexture =
    'url("https://textures.for.design/wp-content/uploads/2023/05/paper-white-3-scaled.jpg")';

  return (
    <Router>
      <div
        style={{
          minHeight: "100vh",
          color: colors.text,
          fontFamily:
            "'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
          backgroundColor: colors.bg,
          backgroundImage: `
            linear-gradient(${colors.soft} 1px, transparent 1px),
            linear-gradient(90deg, ${colors.soft} 1px, transparent 1px),
            ${paperTexture}
          `,
          backgroundSize: "26px 26px, 26px 26px, cover",
          backgroundBlendMode: "soft-light",
          backgroundAttachment: "fixed"
        }}
      >
        <Navbar dark={dark} setDark={setDark} colors={colors} />

        <Routes>
          <Route path="/" element={<Home colors={colors} />} />
          <Route path="/step1" element={<Step1 colors={colors} />} />
          <Route path="/step2" element={<Step2 colors={colors} />} />
          <Route path="/step3" element={<Step3 colors={colors} />} />
          <Route path="/step4" element={<Step4 colors={colors} />} />
          <Route path="/step5" element={<Step5 colors={colors} />} />

          <Route path="/retro" element={<WeeklyRetro colors={colors} />} />
          <Route path="/objections" element={<Objections colors={colors} />} />
          <Route path="/personalization" element={<Personalization colors={colors} />} />
        </Routes>
      </div>
    </Router>
  );
}
