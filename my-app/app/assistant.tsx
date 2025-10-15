"use client";

import { AssistantRuntimeProvider } from "@assistant-ui/react";
import {
  useChatRuntime,
  AssistantChatTransport,
} from "@assistant-ui/react-ai-sdk";
import { Thread } from "@/components/assistant-ui/thread";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ThreadListSidebar } from "@/components/assistant-ui/threadlist-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const Assistant = () => {
  const runtime = useChatRuntime({
    transport: new AssistantChatTransport({
      api: "/api/chat",
    }),
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <SidebarProvider>
        <div className="flex h-dvh w-full pr-0.5">
          <ThreadListSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
              <SidebarTrigger />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                   <BreadcrumbLink
  style={{
    // 1. Text Style Tags: Boldness and Font
    fontWeight: 'bolder',        // Text ko bahut zyada bold karein
    fontSize: '3rem',            // Font Size thoda bada karein
    fontFamily: 'Verdana, sans-serif', // Clean, readable font
     textAlign: 'center',
    letterSpacing: '0.06em',     // Letters ke beech thoda space (stylish look)
    
    // 2. Colorful Look: Bright Color
    color: '#0c0b0bff',            // Tomato Red/Orange color (Aankhon ko turant dikhe)
    // 3. Optional: Subtle Effect
    textShadow: '0 0 5px rgba(86, 185, 231, 0.5)', // Color se match karta halka shadow
    cursor: 'pointer',           // Kyunki yeh link hai
  }}
>
let's Begin
</BreadcrumbLink>
                  </BreadcrumbItem>
               
                  <BreadcrumbItem>

                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </header>
            <div className="flex-1 overflow-hidden">
              <Thread />
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </AssistantRuntimeProvider>
  );
};
