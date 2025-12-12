export interface Project {
    id: string;
    title: string;
    banner?: string;

    cardDescription: string;
    description: string;

    myRole: string;
    targetAudience: string;
    projectGoals: string[];
    outcomes: string[];
    
    timeline: string;
    tech: string[];
    teamSize: number;

    developmentProcess?: {
        title: string;
        description: string;
        image?: string;
    }[];

    challenges: {
        problem: string;
        solution: string;
        impact: string;
        images?: string[];
    }[];

    codeExamples?: {
        title: string;
        description: string;
        image: string;
        keyFeatures: string[];
    }[];

    personalContributions: string[];
    teamContext?: string;

    images?: string[];
    embed?: string;
    itchLink?: string;

    keyTakeaways: string[];
    lessonsLearned: string[];
    futureGoals: string[];
    skillsGained: string[];
    
    tags?: string[];
}
  
export const projectPromotionData: Project = {
    id: "project-promotion",
    title: "Project Promotion",
    banner: "/images/banner.png",

    cardDescription: "A turn-based tactical RPG where unionized employees fight through a dystopian corporate tower to reclaim their dignity and earn the ultimate promotion: freedom.",
    
    description: "Project Promotion is a strategic turn-based RPG set in a dystopian corporate hellscape. Players lead a group of newly unionized employees fighting their way through a multi-level office tower to confront the CEO. Inspired by Final Fantasy X's combat system, the game features dynamic turn-order manipulation, character progression, and workplace-themed mechanics where water coolers heal and printers become weapons. As a gameplay programmer joining production, I was responsible for implementing the core combat systems including character stats, status effects, and ability mechanics that bring this corporate satire to life.",

    myRole: "Gameplay Programmer",
    targetAudience: "Strategy RPG fans and players who enjoy tactical turn-based combat with satirical themes",
    projectGoals: [
        "Create a playable snapshot showcasing core combat mechanics without lengthy tutorials",
        "Implement a flexible, extensible system for status effects and abilities",
        "Design character progression that encourages tactical experimentation"
    ],
    outcomes: [
        "Successfully launched playable build on itch.io",
        "Implemented extensible status effect system supporting 6+ unique effects",
        "Created component-based architecture enabling rapid ability prototyping"
    ],

    timeline: "3.5 months (August - December 2025)",
    tech: ["Unity", "C#", "Git", "ScriptableObjects"],
    teamSize: 10,
    
    personalContributions: [
        "Designed and implemented the entire status effect system using Unity's ScriptableObject architecture, supporting buffs, debuffs, and damage-over-time effects with designer-friendly workflows",
        "Created component-based StatusEffectManager enabling modular attachment to any character",
        "Collaborated with designer to rapidly prototype and iterate on new abilities and status effects",
        "Built ability execution system using C# events and callbacks for seamless UI integration",
        "Implemented CharacterHP system with event-driven damage/healing for flexible combat interactions"
    ],
    teamContext: "I joined the team mid-development as one of three programmers, working alongside 4 artists, 1 designer, 1 producer, and 1 sound designer. I focused specifically on gameplay systems while other programmers handled combat flow, UI, and enemy AI. I worked closely with the designer to implement new features and ensure mechanical balance.",
    
    challenges: [
        {
            problem: "Joining mid-development with an established codebase - needed to quickly understand existing architecture while implementing new systems that wouldn't conflict with or break existing functionality",
            solution: "Spent initial weeks analyzing the codebase structure and existing patterns. Adopted component-based architecture matching the team's approach. Held regular code review sessions with other programmers to ensure integration points were clear. Used Unity's RequireComponent attribute to enforce dependencies and prevent runtime errors.",
            impact: "Successfully integrated all new gameplay systems without breaking existing features. Component-based approach enabled other team members to easily attach and configure status effects.",
            images: []
        },
        {
            problem: "Status effects needed to support diverse behaviors (damage-over-time, stat modifications, removal triggers) while remaining designer-friendly and performant",
            solution: "Leveraged Unity's ScriptableObject system to create data-driven status effects that could be authored directly in the Unity Inspector. Each effect is a reusable asset that can be configured without code changes. Implemented lifecycle methods (OnApply, OnTick, OnRemove) that subclasses override for custom behavior. Added event hooks for damage/healing to enable reactive status effects. Utilized ToArray() when iterating effects to prevent collection modification errors.",
            impact: "Designer could create and test new status effects in ~5 minutes without programmer intervention. ScriptableObject architecture enabled effect reuse across different abilities and enemies. System supported 6+ unique effects including Sleep, Poison, Hyper, Angel, and complex effects like 'remove on damage taken'. Performance remained stable with 4+ active effects per character via ScriptableObject's memory efficiency.",
            images: []
        },
        {
            problem: "Ability execution coordinated with animations, VFX, damage calculation, and UI updates across multiple systems without creating tight coupling",
            solution: "Implemented event-driven architecture using C# Actions and delegates. Abilities invoke OnAbilityComplete callback when finished, allowing UI, turn manager, and resource systems to respond independently. Used null-conditional operator (?.) for safe event invocation. This decoupled ability logic from UI and game state management.",
            impact: "Enabled parallel work - UI programmer could implement action menu updates, VFX artist could hook animations, and designer could tune ability costs without blocking each other. Reduced cross-system dependencies and made debugging significantly easier as each system could be tested in isolation.",
            images: []
        }
    ],

    codeExamples: [
        {
            title: "Status Effect System - ScriptableObject Architecture",
            description: "This status effect system leverages Unity's ScriptableObject architecture for data-driven game design. Each status effect is a reusable asset that designers can create and configure directly in the Unity Inspector without writing code. The ScriptableObject pattern provides memory efficiency since all instances reference the same asset data. Virtual lifecycle methods (OnApply, OnTick, OnRemove) allow programmers to create specialized effect behaviors through inheritance while keeping configuration accessible to designers. This approach separates data from logic and enables rapid iteration on game balance.",
            image: "/CodeImages/ScriptableObjectCode.png",
            keyFeatures: [
                "ScriptableObject-based architecture for designer-friendly, data-driven workflow",
                "Reusable assets - same effect ScriptableObject can be applied by multiple abilities",
                "Memory efficient - all instances share the same asset data",
                "Inspector-configurable with serialized fields for zero-code effect creation",
                "Virtual methods enable custom effect behaviors through inheritance when needed",
                "Comprehensive XML documentation for team reference",
                "Type-safe enum for effect categorization and filtering"
            ]
        },
        {
            title: "StatusEffectManager - Component-Based Architecture",
            description: "The StatusEffectManager uses Unity's component system and event-driven programming to handle all status effects on a character. It subscribes to CharacterHP events for damage and healing, allowing status effects to react to combat events. The manager uses readonly collections for safe external access and ToArray() when iterating to prevent modification-during-iteration errors. RequireComponent ensures CharacterData dependency is always met.",
            image: "/CodeImages/CompositionCode.png",
            keyFeatures: [
                "Component-based design following Unity best practices",
                "Event-driven architecture for loose coupling between systems",
                "Defensive iteration using ToArray() prevents collection modification errors",
                "Readonly list interface (IReadOnlyList) for safe external access",
                "RequireComponent attribute enforces dependencies at edit-time",
                "Comprehensive event handling for damage, healing, and death scenarios"
            ]
        },
        {
            title: "Ability System - Event Callbacks",
            description: "The ability system uses C# events (Action delegates) to coordinate execution across multiple systems. When an ability completes, it invokes OnAbilityComplete, allowing the UI, turn manager, and resource systems to respond without tight coupling. Properties with expression bodies provide clean read-only access to ability data. The null-conditional operator ensures safe event invocation even if no subscribers exist.",
            image: "/CodeImages/CallbackCode.png",
            keyFeatures: [
                "Event-driven design enables parallel development across systems",
                "Expression-bodied properties for clean, readable data access",
                "Null-conditional operator (?.) for safe event invocation",
                "Clear separation of concerns - ability logic stays in Ability class",
                "Subscribers can easily hook into ability lifecycle without modifying core code",
                "Commented-out debug code preserved for team reference during development"
            ]
        },
        {
            title: "CharacterHP - Event-Driven Combat System",
            description: "CharacterHP manages health using both instance-level and static events, enabling flexible subscription patterns. Instance events allow specific characters to react to their own state changes, while static events enable global systems to track all character deaths. The system includes defensive programming with null checks and dead state validation. Events provide combat context (damage amount, attacker) for reactive gameplay systems.",
            image: "/CodeImages/EventCode.png",
            keyFeatures: [
                "Dual event system (instance and static) for flexible subscription patterns",
                "Event parameters provide context (damage amount, attacker) for reactive systems",
                "Defensive programming prevents invalid state transitions",
                "Separated from CharacterData following Single Responsibility Principle",
                "RequireComponent ensures proper component dependencies",
                "Clean event invocation pattern with null-conditional operator"
            ]
        }
    ],

    developmentProcess: [
        {
            title: "Onboarding & Codebase Familiarization",
            description: "Spent the first two weeks analyzing the existing codebase structure, understanding the combat flow, and identifying integration points for new gameplay systems. Created documentation of existing architecture patterns to guide my implementations."
        },
        {
            title: "Status Effect System Design",
            description: "Designed the status effect architecture using Unity's ScriptableObject system based on team's existing patterns. This data-driven approach enabled designers to create new effects as reusable assets. Prototyped with basic effects (Burn, Shield) to validate the lifecycle event approach before expanding to more complex behaviors."
        },
        {
            title: "Component-Based Implementation",
            description: "Implemented StatusEffectManager as a component, enabling modular attachment to any character. Integrated with existing CharacterData and CharacterHP systems through event subscriptions rather than direct coupling."
        },
        {
            title: "Designer Collaboration & Iteration",
            description: "Worked closely with the game designer in biweekly meetings to implement new abilities and status effects. Created data-driven workflows allowing the designer to prototype effects in the Unity Inspector without waiting for code changes."
        }
    ],
    
    keyTakeaways: [
        "Component-based architecture and event-driven design enable parallel development and reduce system coupling",
        "ScriptableObject-based systems empower designers to iterate quickly without programmer bottlenecks",
        "Joining established projects requires careful analysis of existing patterns before adding new systems",
        "Clear documentation and regular code reviews are essential for team integration"
    ],
    lessonsLearned: [
        "Learned the power of Unity's ScriptableObject architecture for creating designer-friendly, data-driven game systems",
        "Discovered how event-driven architecture reduces dependencies and makes debugging easier",
        "Gained experience working in an established codebase and matching existing architectural patterns",
        "Understood the importance of defensive programming (null checks, ToArray()) in complex game systems"
    ],
    skillsGained: [
        "Unity ScriptableObject Architecture",
        "C# Event-Driven Programming",
        "Component-Based Game Design",
        "Abstract Classes & Inheritance",
        "Turn-Based Combat Systems",
        "Team Code Integration"
    ],
    futureGoals: [
        "Study advanced AI behavior trees for more sophisticated enemy patterns",
        "Explore procedural generation for dynamic level layouts",
        "Develop networking skills for multiplayer tactical RPGs"
    ],
    
    images: ["/images/image1.png", "/images/image2.png", "/images/image3.png", "/images/image4.png", "/images/image5.png", "/images/image6.png"],
    embed: "",
    itchLink: "https://cookieinferno.itch.io/project-promotion",
    
    tags: ["Unity", "C#", "Turn-Based Combat", "RPG", "Status Effects", "Event-Driven Architecture"]
};

export const projects: Project[] = [
    {
        ...projectPromotionData,
    }
];