# Graph Report - Yash-Portfolio  (2026-06-17)

## Corpus Check
- 100 files · ~27,175 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 584 nodes · 826 edges · 46 communities (41 shown, 5 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7e8ffe77`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 47|Community 47]]

## God Nodes (most connected - your core abstractions)
1. `cn()` - 92 edges
2. `compilerOptions` - 16 edges
3. `/generate — Portfolio Landing Page Generator` - 15 edges
4. `prefersReducedMotion()` - 14 edges
5. `Button` - 9 edges
6. `ContentGrid` - 8 edges
7. `Section` - 8 edges
8. `Yash Verma - Portfolio Website` - 8 edges
9. `scripts` - 7 edges
10. `Container()` - 7 edges

## Surprising Connections (you probably didn't know these)
- `Navbar()` --calls--> `cn()`  [EXTRACTED]
  src/components/Navbar.tsx → src/lib/utils.ts
- `AlertDialogHeader()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/alert-dialog.tsx → src/lib/utils.ts
- `AlertDialogFooter()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/alert-dialog.tsx → src/lib/utils.ts
- `BreadcrumbSeparator()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/breadcrumb.tsx → src/lib/utils.ts
- `BreadcrumbEllipsis()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/breadcrumb.tsx → src/lib/utils.ts

## Import Cycles
- None detected.

## Communities (46 total, 5 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.04
Nodes (53): dependencies, class-variance-authority, clsx, cmdk, date-fns, embla-carousel-react, framer-motion, gsap (+45 more)

### Community 1 - "Community 1"
Cohesion: 0.05
Nodes (38): useIsMobile(), Input, Separator, SheetContent, SheetContentProps, SheetDescription, SheetFooter(), SheetHeader() (+30 more)

### Community 2 - "Community 2"
Cohesion: 0.07
Nodes (30): achievementItems, Achievements(), Footer(), PillNavProps, projects, Skills(), skillsTimelineData, Container() (+22 more)

### Community 3 - "Community 3"
Cohesion: 0.09
Nodes (27): Contact(), socialLinks, ResumeShowcase(), Action, ActionType, addToRemoveQueue(), dispatch(), genId() (+19 more)

### Community 4 - "Community 4"
Cohesion: 0.08
Nodes (30): About(), aboutTypingBlocks, fadeIn, playfair, socialLinks, Hero(), HeroTypingHello(), prefersReducedMotion() (+22 more)

### Community 5 - "Community 5"
Cohesion: 0.07
Nodes (27): devDependencies, autoprefixer, eslint, eslint-config-next, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals (+19 more)

### Community 6 - "Community 6"
Cohesion: 0.09
Nodes (22): Before Writing Code, Content Conventions, Core state, Decision: Section vs. Route, Design Disciplines, Design Tokens, Functional state, /generate — Portfolio Landing Page Generator (+14 more)

### Community 7 - "Community 7"
Cohesion: 0.10
Nodes (12): Checkbox, HoverCardContent, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot, PopoverContent, Progress (+4 more)

### Community 8 - "Community 8"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, baseUrl, esModuleInterop, incremental, isolatedModules, jsx, lib (+11 more)

### Community 9 - "Community 9"
Cohesion: 0.12
Nodes (16): aliases, components, hooks, lib, ui, utils, rsc, $schema (+8 more)

### Community 10 - "Community 10"
Cohesion: 0.12
Nodes (14): Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut() (+6 more)

### Community 11 - "Community 11"
Cohesion: 0.14
Nodes (11): FormControl, FormDescription, FormFieldContext, FormFieldContextValue, FormItem, FormItemContext, FormItemContextValue, FormLabel (+3 more)

### Community 12 - "Community 12"
Cohesion: 0.20
Nodes (14): cn(), buttonVariants, Calendar(), CalendarProps, Pagination(), PaginationContent, PaginationEllipsis(), PaginationItem (+6 more)

### Community 13 - "Community 13"
Cohesion: 0.17
Nodes (11): Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarLabel, MenubarRadioItem, MenubarSeparator, MenubarShortcut() (+3 more)

### Community 14 - "Community 14"
Cohesion: 0.18
Nodes (10): Available Scripts, Contact, Deployment, Features, Getting Started, Installation, Prerequisites, Project Structure (+2 more)

### Community 15 - "Community 15"
Cohesion: 0.18
Nodes (7): ChartConfig, ChartContainer, ChartContext, ChartContextProps, ChartLegendContent, ChartTooltipContent, THEMES

### Community 16 - "Community 16"
Cohesion: 0.50
Nodes (3): Avatar, AvatarFallback, AvatarImage

### Community 17 - "Community 17"
Cohesion: 0.20
Nodes (9): DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut(), DropdownMenuSubContent (+1 more)

### Community 18 - "Community 18"
Cohesion: 0.22
Nodes (8): Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow

### Community 19 - "Community 19"
Cohesion: 0.32
Nodes (6): main(), path, ROOT, scheduleUpdate(), shouldUpdate(), { spawn }

### Community 20 - "Community 20"
Cohesion: 0.50
Nodes (3): AccordionContent, AccordionItem, AccordionTrigger

### Community 21 - "Community 21"
Cohesion: 0.25
Nodes (7): NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuViewport

### Community 22 - "Community 22"
Cohesion: 0.25
Nodes (7): SelectContent, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger

### Community 23 - "Community 23"
Cohesion: 0.23
Nodes (10): Badge(), BadgeProps, badgeVariants, Card, CardContent, CardDescription, CardFooter, CardHeader (+2 more)

### Community 24 - "Community 24"
Cohesion: 0.22
Nodes (8): AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter(), AlertDialogHeader(), AlertDialogOverlay, AlertDialogTitle

### Community 25 - "Community 25"
Cohesion: 0.40
Nodes (4): Alert, AlertDescription, AlertTitle, alertVariants

### Community 27 - "Community 27"
Cohesion: 0.20
Nodes (9): ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut(), ContextMenuSubContent (+1 more)

### Community 28 - "Community 28"
Cohesion: 0.16
Nodes (11): inter, metadata, EnsureHeroOnLoad(), LoadingScreen(), NAV_ITEMS, Navbar(), SECTION_IDS, YVLogoStroke (+3 more)

### Community 29 - "Community 29"
Cohesion: 0.25
Nodes (7): Breadcrumb, BreadcrumbEllipsis(), BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator()

### Community 30 - "Community 30"
Cohesion: 0.50
Nodes (3): TabsContent, TabsList, TabsTrigger

### Community 33 - "Community 33"
Cohesion: 0.25
Nodes (6): DrawerContent, DrawerDescription, DrawerFooter(), DrawerHeader(), DrawerOverlay, DrawerTitle

### Community 44 - "Community 44"
Cohesion: 0.17
Nodes (6): ANIMATION_CONFIG, ImageLogo, LogoItem, LogoLoop, LogoLoopProps, NodeLogo

### Community 47 - "Community 47"
Cohesion: 0.33
Nodes (5): ToggleGroup, ToggleGroupContext, ToggleGroupItem, Toggle, toggleVariants

## Knowledge Gaps
- **352 isolated node(s):** `extends`, `ignorePatterns`, `inter`, `metadata`, `$schema` (+347 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `Community 12` to `Community 1`, `Community 2`, `Community 3`, `Community 4`, `Community 7`, `Community 10`, `Community 11`, `Community 13`, `Community 15`, `Community 16`, `Community 17`, `Community 18`, `Community 20`, `Community 21`, `Community 22`, `Community 23`, `Community 24`, `Community 25`, `Community 26`, `Community 27`, `Community 28`, `Community 29`, `Community 30`, `Community 33`, `Community 47`?**
  _High betweenness centrality (0.247) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Community 0` to `Community 5`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **Why does `Container()` connect `Community 2` to `Community 4`, `Community 12`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **What connects `extends`, `ignorePatterns`, `inter` to the rest of the system?**
  _352 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.03773584905660377 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.04927536231884058 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.06648936170212766 - nodes in this community are weakly interconnected._