# Graph Report - Yash-Portfolio  (2026-07-11)

## Corpus Check
- 103 files · ~27,463 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 604 nodes · 868 edges · 55 communities (47 shown, 8 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ffc83424`
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
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 53|Community 53]]
- [[_COMMUNITY_Community 54|Community 54]]

## God Nodes (most connected - your core abstractions)
1. `cn()` - 92 edges
2. `compilerOptions` - 16 edges
3. `/generate — Portfolio Landing Page Generator` - 15 edges
4. `prefersReducedMotion()` - 14 edges
5. `handlePythonChat()` - 10 edges
6. `Button` - 9 edges
7. `ContentGrid` - 8 edges
8. `Section` - 8 edges
9. `Yash Verma - Portfolio Website` - 8 edges
10. `scripts` - 7 edges

## Surprising Connections (you probably didn't know these)
- `POST()` --calls--> `getBackendUrl()`  [EXTRACTED]
  app/api/chat/route.ts → src/lib/backend-url.ts
- `POST()` --calls--> `handlePythonChat()`  [EXTRACTED]
  app/api/chat/route.ts → src/lib/python-chat.ts
- `Navbar()` --calls--> `cn()`  [EXTRACTED]
  src/components/Navbar.tsx → src/lib/utils.ts
- `AlertDialogHeader()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/alert-dialog.tsx → src/lib/utils.ts
- `AlertDialogFooter()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/alert-dialog.tsx → src/lib/utils.ts

## Import Cycles
- None detected.

## Communities (55 total, 8 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.04
Nodes (54): dependencies, class-variance-authority, clsx, cmdk, date-fns, embla-carousel-react, framer-motion, googleapis (+46 more)

### Community 1 - "Community 1"
Cohesion: 0.05
Nodes (37): useIsMobile(), Separator, SheetContent, SheetContentProps, SheetDescription, SheetFooter(), SheetHeader(), SheetOverlay (+29 more)

### Community 2 - "Community 2"
Cohesion: 0.26
Nodes (7): Footer(), Container(), ContainerProps, Section, SectionProps, SectionVariant, variantStyles

### Community 3 - "Community 3"
Cohesion: 0.11
Nodes (24): Contact(), Action, ActionType, addToRemoveQueue(), dispatch(), genId(), listeners, memoryState (+16 more)

### Community 4 - "Community 4"
Cohesion: 0.16
Nodes (14): About(), aboutTypingBlocks, fadeIn, playfair, socialLinks, Hero(), HeroTypingHello(), ResumeShowcase() (+6 more)

### Community 5 - "Community 5"
Cohesion: 0.07
Nodes (27): devDependencies, autoprefixer, eslint, eslint-config-next, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals (+19 more)

### Community 6 - "Community 6"
Cohesion: 0.09
Nodes (22): Before Writing Code, Content Conventions, Core state, Decision: Section vs. Route, Design Disciplines, Design Tokens, Functional state, /generate — Portfolio Landing Page Generator (+14 more)

### Community 7 - "Community 7"
Cohesion: 0.12
Nodes (8): Checkbox, HoverCardContent, PopoverContent, Progress, ScrollArea, ScrollBar, Slider, Switch

### Community 8 - "Community 8"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, baseUrl, esModuleInterop, incremental, isolatedModules, jsx, lib (+11 more)

### Community 9 - "Community 9"
Cohesion: 0.12
Nodes (16): aliases, components, hooks, lib, ui, utils, rsc, $schema (+8 more)

### Community 10 - "Community 10"
Cohesion: 0.20
Nodes (8): Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut()

### Community 11 - "Community 11"
Cohesion: 0.14
Nodes (11): FormControl, FormDescription, FormFieldContext, FormFieldContextValue, FormItem, FormItemContext, FormItemContextValue, FormLabel (+3 more)

### Community 12 - "Community 12"
Cohesion: 0.26
Nodes (10): cn(), Pagination(), PaginationContent, PaginationEllipsis(), PaginationItem, PaginationLinkProps, PaginationNext(), PaginationPrevious() (+2 more)

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
Cohesion: 0.40
Nodes (4): InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot

### Community 21 - "Community 21"
Cohesion: 0.25
Nodes (7): NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuViewport

### Community 22 - "Community 22"
Cohesion: 0.25
Nodes (7): SelectContent, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger

### Community 23 - "Community 23"
Cohesion: 0.14
Nodes (16): Skills(), skillsTimelineData, Badge(), BadgeProps, badgeVariants, Card, CardContent, CardDescription (+8 more)

### Community 24 - "Community 24"
Cohesion: 0.22
Nodes (8): AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter(), AlertDialogHeader(), AlertDialogOverlay, AlertDialogTitle

### Community 25 - "Community 25"
Cohesion: 0.17
Nodes (6): ANIMATION_CONFIG, ImageLogo, LogoItem, LogoLoop, LogoLoopProps, NodeLogo

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

### Community 31 - "Community 31"
Cohesion: 0.19
Nodes (17): POST(), getBackendUrl(), bookCalendarEvent(), BookMeetingParams, BookMeetingResult, formatBookingConfirmation(), getCalendarClient(), toCalendarDateTime() (+9 more)

### Community 33 - "Community 33"
Cohesion: 0.25
Nodes (6): DrawerContent, DrawerDescription, DrawerFooter(), DrawerHeader(), DrawerOverlay, DrawerTitle

### Community 35 - "Community 35"
Cohesion: 0.50
Nodes (3): AccordionContent, AccordionItem, AccordionTrigger

### Community 36 - "Community 36"
Cohesion: 0.12
Nodes (17): achievementItems, Achievements(), Carousel, CarouselApi, CarouselContent, CarouselContext, CarouselContextProps, CarouselItem (+9 more)

### Community 44 - "Community 44"
Cohesion: 0.21
Nodes (8): socialLinks, Input, SocialBox(), SocialBoxProps, SocialCard(), SocialCardProps, SocialLink, Textarea

### Community 45 - "Community 45"
Cohesion: 0.29
Nodes (5): projects, SectionHeader, SectionHeaderProps, ProjectCardSparkles(), SPARKLES

### Community 46 - "Community 46"
Cohesion: 0.29
Nodes (6): DialogContent, DialogDescription, DialogFooter(), DialogHeader(), DialogOverlay, DialogTitle

### Community 47 - "Community 47"
Cohesion: 0.33
Nodes (5): ToggleGroup, ToggleGroupContext, ToggleGroupItem, Toggle, toggleVariants

### Community 49 - "Community 49"
Cohesion: 0.40
Nodes (4): colClasses, ContentGrid, ContentGridProps, GridCols

### Community 50 - "Community 50"
Cohesion: 0.40
Nodes (4): Alert, AlertDescription, AlertTitle, alertVariants

### Community 51 - "Community 51"
Cohesion: 0.50
Nodes (4): buttonVariants, Calendar(), CalendarProps, PaginationLink()

## Knowledge Gaps
- **359 isolated node(s):** `extends`, `ignorePatterns`, `inter`, `metadata`, `$schema` (+354 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `Community 12` to `Community 1`, `Community 2`, `Community 3`, `Community 4`, `Community 7`, `Community 10`, `Community 11`, `Community 13`, `Community 15`, `Community 16`, `Community 17`, `Community 18`, `Community 20`, `Community 21`, `Community 22`, `Community 23`, `Community 24`, `Community 27`, `Community 28`, `Community 29`, `Community 30`, `Community 33`, `Community 35`, `Community 36`, `Community 44`, `Community 45`, `Community 46`, `Community 47`, `Community 48`, `Community 49`, `Community 50`, `Community 51`, `Community 54`?**
  _High betweenness centrality (0.232) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Community 0` to `Community 5`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **Why does `Container()` connect `Community 2` to `Community 4`, `Community 12`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **What connects `extends`, `ignorePatterns`, `inter` to the rest of the system?**
  _359 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.037037037037037035 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.0507399577167019 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.11375661375661375 - nodes in this community are weakly interconnected._