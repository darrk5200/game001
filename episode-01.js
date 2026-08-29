// ═══════════════════════════════════════════════════════════
//  EPISODE 01 — story data only (scenes, dialogue, choices)
//  Behaviour lives in engine.js; this file only describes what
//  happens and calls the engine functions through script steps.
// ═══════════════════════════════════════════════════════════

const EPISODE_01_SCENES = {};


// ── Scenes ─────────────────────────────
// Each scene has its own background, walkable cells and spawn cell.

EPISODE_01_SCENES['scene-1'] = {
    background: 'assets/room1.png',
    spawn: { col: 10, row: 10 },
    walkable: "C14R8C15R8C16R8C17R8C14R9C15R9C16R9C17R9C10R10C11R10C12R10C13R10C14R10C15R10C16R10C17R10C10R11C11R11C12R11C13R11C14R11C15R11C16R11C17R11C10R12C11R12C12R12C13R12C14R12C15R12C16R12C17R12C10R13C11R13C12R13C13R13C14R13C15R13C16R13C17R13C10R14C11R14C12R14C13R14C14R14C15R14C16R14C17R14C10R15C11R15C12R15C13R15C14R15C15R15C16R15C17R15C8R12C9R12C8R13C9R13C8R14C9R14C8R15C9R15C3R12C4R12C5R12C6R12C7R12C3R13C4R13C5R13C6R13C7R13C12R16C13R16C14R16C15R16C16R16C17R16C18R16C18R10C19R10C18R11C19R11C18R12C19R12C18R13C19R13C18R14C19R14C18R15C19R15C25R10C25R11C25R12C25R13C25R14C25R15C19R10",

    // Interact-cells: standing on any cell in `cells` shows the interact icon
    // at the `icon` cell. Press E to open that interaction's dialogue.
    // `lines` is an array of pages: { speaker, text }. A page with no speaker
    // continues the previous speaker (name plate stays visible).
    interacts: [
      // Computer desk
      {
        cells: "C19R10",
        icon: "C10R4",
        lines: [
          {
            speaker: "narrator",
            text: "Would you like to use your computer?",
            choices: [
              { label: "Yes", action: "computer" },
              { label: "No" },
            ],
          },
        ],
      },
      {
        cells: "C25R14C25R15",
        icon: "C23R3",
        lines: [
          { speaker: "narrator", text: "Your closet is full of clothes, hanging there since the ancient ages" },
          { speaker: "narrator", text: "You do not feel like dressing fancy today" },
        ],
      },
      // Doorway to roomways
      { cells: "C15R16C16R16", icon: "C18R2", goto: "scene-1.5", at: 'C6R15' },
    ],
};

EPISODE_01_SCENES['scene-2'] = {
  background: 'assets/commonroom.png',
  spawn: { col: 3, row: 11 },
  walkable: "C5R8C6R8C7R8C8R8C9R8C10R8C11R8C12R8C5R9C6R9C7R9C8R9C9R9C10R9C11R9C12R9C5R10C6R10C7R10C8R10C9R10C10R10C11R10C12R10C13R8C14R8C15R8C16R8C17R8C18R8C19R8C20R8C21R8C22R8C13R9C14R9C15R9C16R9C17R9C18R9C19R9C20R9C21R9C22R9C20R7C21R7C22R7C7R6C8R6C7R7C8R7C5R7C6R7C23R10C24R10C25R10C26R10C27R10C23R11C24R11C25R11C26R11C27R11C23R12C24R12C23R13C24R13C23R14C24R14C23R15C24R15C25R12C26R12C27R12C28R12C29R12C25R13C26R13C27R13C28R13C29R13C25R14C26R14C27R14C28R14C29R14C25R15C26R15C27R15C28R15C29R15C27R10C27R11C28R11C29R11C20R13C21R13C22R13C23R13C24R13C25R13C26R13C27R13C28R13C29R13C20R14C21R14C22R14C23R14C24R14C25R14C26R14C27R14C28R14C29R14C20R15C21R15C22R15C23R15C24R15C25R15C26R15C27R15C28R15C29R15C2R15C3R15C4R15C5R15C6R15C7R15C8R15C9R15C10R15C11R15C12R15C13R15C14R15C15R15C16R15C17R15C18R15C19R15C2R13C3R13C4R13C5R13C6R13C7R13C8R13C9R13C10R13C2R14C3R14C4R14C5R14C6R14C7R14C8R14C9R14C10R14C2R15C3R15C4R15C5R15C6R15C7R15C8R15C9R15C10R15C4R10C5R10C6R10C7R10C4R11C5R11C6R11C7R11C4R12C5R12C6R12C7R12C2R11C3R11C4R11C5R11C2R12C3R12C4R12C5R12C2R13C3R13C4R13C5R13C2R14C3R14C4R14C5R14C2R15C3R15C4R15C5R15C5R13C6R13C7R13C8R13C9R13C10R13C5R14C6R14C7R14C8R14C9R14C10R14C12R16C13R16C14R16C15R16C16R16C17R16C18R16",
  // Static characters/objects drawn in the scene at a given cell.
  props: [],
  interacts: [
    // Back to your room
    { cells: "C3R11C4R11", icon: "C3R9", goto: 'scene-1', at: 'C18R4' },
    // Back to roomways
    { cells: "C24R10C25R10C26R10", icon: "C25R8", goto: 'scene-1.5', at: 'C15R19' },

    // ── The knock at the door (one-shot cutscene) ──
    {
      cells: "C14R16C15R16C16R16",
      icon: "C15R18",
      script: [
        { dialog: [{ speaker: 'narrator', text: "You barely open the door and..", completeObjective: true }] },
        { playerTo: 'C13R16' },
        { actor: { id: 'june', sprite: 'june_idle', at: 'C16R17' } },
        { actorTo: { id: 'june', to: 'C16R16' } },
        {
          dialog: [
            { speaker: 'june', sprite: 'june_upset', text: "What took you so long?" },
            { speaker: 'july', sprite: 'july_idle', text: "The power is out. I couldn't hear you knocking" },
            { speaker: 'june', sprite: 'june_idle-a', text: "I know, I know." },
            { speaker: 'june', sprite: 'june_idle-a', text: "I've been sitting in the dark for two hours listening to you not wake up" },
            { speaker: 'july', sprite: 'july_angry', text: "How are YOU the one getting angry?" },
            { speaker: 'july', sprite: 'july_idle', text: "Okay so where on earth did you go at midnight?" },
            { speaker: 'narrator', text: "She's still in last night's clothes. Her hair smells like cigarettes that she didn't smoke." },
            { speaker: 'june', sprite: 'june_anxious', text: "No, no. I got here waaaayy earlier. At like 1" },
            { speaker: 'july', sprite: 'july_angry', text: "No you didn't. When exactly did you get back?" },
            { speaker: 'june', sprite: 'june_upset', text: "God, you're- Ok, fine. I came in at four." },
            { speaker: 'june', sprite: 'june_idle-b', text: "but you don't need others to hear that though. Please." },
            {
              speaker: 'narrator',
              text: "Cover for her?",
              choices: [
                {
                  label: "Yeah, you went to bed at 11",
                  flags: { covered_for_june: true },
                  script: [
                    {
                      dialog: [
                        { speaker: 'june', sprite: 'june_smile', text: "Thanks!!" },
                        { speaker: 'narrator', text: "She says it too fast, like she's paying for something." },
                        { speaker: 'july', sprite: 'july_idle', text: "That's the 4th lie I'm holding for you this month. I'm keeping count" },
                        { speaker: 'june', sprite: 'june_upset', text: "How about you don't keep that count then." },
                        { speaker: 'june', sprite: 'june_upset', text: "Well, I'm off to get some food" },
                      ],
                    },
                    { if: { flag: 'tried_kitchen' }, then: { dialog: [{ speaker: 'narrator', text: "Maybe now IS the time to get some food" }] } },
                  ],
                },
                {
                  label: "Absolutely. Not.",
                  flags: { covered_for_june: false },
                  lines: [
                    { speaker: 'july', sprite: 'july_idle', text: "Absolutely. Not. If you want to live like an adult, lie like an adult on your own." },
                    { speaker: 'june', sprite: 'june_upset', text: "You know how it'll be like." },
                    { speaker: 'july', sprite: 'july_idle', text: "Yeah, I do. I've always known how it's like. Far longer than you infact." },
                    { speaker: 'narrator', text: "Something in her face closes quietly. But then.." },
                    { speaker: 'june', sprite: 'june_upset', text: "Right, right. Everything is always harder for you." },
                    { speaker: 'june', sprite: 'june_upset', text: "Well then, I'm going." },
                  ],
                },
              ],
            },
          ],
        },
        // June walks off to the kitchen while the narration plays.
        {
          parallel: [
            { dialog: [{ speaker: 'narrator', text: "And there she goes, into the kitchen" }] },
            { actorPath: { id: 'june', path: ['C16R15', 'C27R15', 'C27R12', 'C28R12', 'C28R10'] } },
          ],
        },
        { removeActor: 'june' },
      ],
    },
    // Kitchen doorway
    {
      cells: "C27R10C27R11C28R11",
      icon: "C27R9",
      once: false,
      script: [
        {
          if: { flag: 'objective_1' },
          then: { goto: 'scene-3' },
          else: {
            parallel: [
              { flags: { tried_kitchen: true } },
              { dialog: [{ speaker: 'narrator', text: "Now is not the time to get some food. That's the kitchen" }] },
            ],
          },
        },
      ],
    },
  ],

};

// ── Kitchen ──
EPISODE_01_SCENES['scene-3'] = {
  background: 'assets/kitchen.png',
  spawn: { col: 3, row: 11 },
  walkable: "C5R8C6R8C7R8C8R8C9R8C10R8C11R8C12R8C13R8C14R8C15R8C16R8C17R8C18R8C19R8C20R8C21R8C22R8C23R8C24R8C25R8C26R8C27R8C5R9C6R9C7R9C8R9C9R9C10R9C11R9C12R9C13R9C14R9C15R9C16R9C17R9C18R9C19R9C20R9C21R9C22R9C23R9C24R9C25R9C26R9C27R9C5R10C6R10C7R10C8R10C9R10C10R10C11R10C12R10C13R10C14R10C15R10C16R10C17R10C18R10C19R10C20R10C21R10C22R10C23R10C24R10C25R10C26R10C27R10C4R10C5R10C6R10C7R10C8R10C9R10C10R10C11R10C12R10C13R10C14R10C15R10C16R10C17R10C18R10C19R10C20R10C21R10C22R10C23R10C24R10C25R10C26R10C27R10C3R11C4R11C2R11C3R11C4R11C5R11C6R11C2R12C3R12C4R12C5R12C6R12C2R13C3R13C4R13C5R13C6R13C2R14C3R14C4R14C5R14C6R14C2R15C3R15C4R15C5R15C6R15C6R11C7R11C8R11C8R14C9R14C10R14C8R15C9R15C10R15C2R15C3R15C4R15C5R15C6R15C7R15C8R15C9R15C10R15C11R15C12R15C13R15C14R15C15R15C16R15C17R15C18R15C19R15C20R15C21R15C22R15C23R15C24R15C25R15C26R15C27R15C28R15C29R15C12R16C13R16C14R16C15R16C16R16C17R16C18R16C19R16C21R14C13R14C14R14C17R14C18R14C23R14C24R14C25R14C26R14C27R14C28R14C29R14C24R9C25R9C26R9C27R9C24R10C25R10C26R10C27R10C24R11C25R11C26R11C27R11C24R12C25R12C26R12C27R12C24R13C25R13C26R13C27R13C24R14C25R14C26R14C27R14C28R12C29R12C28R13C29R13C28R14C29R14C28R15C29R15",
  props: [
    { cell: 'C6R8', sprite: 'june_idle' },
  ],
  interacts: [],
};

// ── Roomways (hallway between July's and June's rooms) ──
EPISODE_01_SCENES['scene-1.5'] = {
  background: 'assets/roomways.png',
  spawn: { col: 16, row: 16 },
  walkable: "C3R15C4R15C5R15C6R15C7R15C8R15C9R15C10R15C11R15C12R15C13R15C14R15C15R15C16R15C17R15C18R15C19R15C20R15C21R15C22R15C23R15C24R15C25R15C26R15C27R15C28R15C3R16C4R16C5R16C6R16C7R16C8R16C9R16C10R16C11R16C12R16C13R16C14R16C15R16C16R16C17R16C18R16C19R16C20R16C21R16C22R16C23R16C24R16C25R16C26R16C27R16C28R16C29R16C2R17C3R17C4R17C5R17C6R17C7R17C8R17C9R17C10R17C11R17C12R17C13R17C14R17C15R17C16R17C17R17C18R17C19R17C20R17C21R17C22R17C23R17C24R17C25R17C26R17C27R17C28R17C29R17C2R18C3R18C4R18C5R18C6R18C7R18C8R18C9R18C10R18C11R18C12R18C13R18C14R18C15R18C16R18C17R18C18R18C19R18C20R18C21R18C22R18C23R18C24R18C25R18C26R18C27R18C28R18C29R18C11R19C12R19C13R19C14R19C15R19C16R19C17R19C18R19",
  interacts: [
    // July's door — back to your room
    { cells: "C5R15C6R15C7R15", icon: "C6R7", goto: 'scene-1', at: 'C15R16' },
    // June's door — locked
    {
      cells: "C24R15C25R15C26R15",
      icon: "C25R7",
      lines: [
        { speaker: 'narrator', text: "June's room. The door is shut." },
        { speaker: 'narrator', text: "Better not." },
      ],
    },
    // Doorway to common room
    { cells: "C13R19C14R19C15R19C16R19", icon: "C15R18", goto: 'scene-2', at: 'C25R10' },
  ],
};

// ── Characters ─────────────────────────────
// Each speaker gets a display name and a dialogue text colour.
const EPISODE_01_CHARACTERS = {
  narrator: { name: 'Narrator', dialogue_color: 'white', hide_name: true },
  july:     { name: 'July',     dialogue_color: '#7ab8ff' },
  june:     { name: 'June',     dialogue_color: '#ff9ec7' },
};

// Opening narration for a fresh playthrough.
const EPISODE_01_INTRO = [
  { speaker: 'narrator', text: "The ceiling fan is dead. The fridge two rooms away is dead. The whole flat is holding its breath." },
  { speaker: 'narrator', text: "The power's out. Third time this month." },
  {
    speaker: 'july', sprite: 'july_idle',
    text: "Who's knocking at the door at this hour?",
    objective: "Leave your room and open the main door. Someone is knocking",
  },
  { speaker: 'july', sprite: 'july_idle', text: "It must be June.. again. Which means she came back. Which means she went out first." },
];

registerEpisode({
  id: 'episode-01',
  title: 'Episode 01',
  startScene: 'scene-1',
  scenes: EPISODE_01_SCENES,
  characters: EPISODE_01_CHARACTERS,
  intro: EPISODE_01_INTRO,
});
