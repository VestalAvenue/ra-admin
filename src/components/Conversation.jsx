import { useState } from 'react';
import { Send, Mic, User, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const initialMessages = [
    {
        id: '1',
        content:
            'Hi there! Welcome to our new platform. How can I assist you today?',
        sender: 'ai',
        timestamp: new Date(Date.now() - 1000 * 60 * 10).toISOString(),
    },
    {
        id: '2',
        content:
            "Hello! I'm looking for information about your premium subscription plans.",
        sender: 'user',
        timestamp: new Date(Date.now() - 1000 * 60 * 9).toISOString(),
    },
    {
        id: '3',
        content:
            "Great question! Our premium plan offers unlimited access to all features, priority support, and advanced analytics. It's priced at $19.99/month with a 7-day free trial.",
        sender: 'ai',
        timestamp: new Date(Date.now() - 1000 * 60 * 8).toISOString(),
    },
    {
        id: '4',
        content:
            'That sounds interesting. Are there any discounts for annual subscriptions?',
        sender: 'user',
        timestamp: new Date(Date.now() - 1000 * 60 * 7).toISOString(),
    },
    {
        id: '5',
        content:
            'We offer a 20% discount on annual subscriptions, bringing the price down to $191.90 per year, which saves you about $48 compared to the monthly plan.',
        sender: 'ai',
        timestamp: new Date(Date.now() - 1000 * 60 * 6).toISOString(),
    },
];

function ChatBubble({ message, isUser, timestamp }) {
    const formattedTime = new Date(timestamp).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });

    return (
        <div
            className={cn('flex w-full', isUser ? 'justify-end' : 'justify-start')}
        >
            <div
                className={cn(
                    'flex max-w-[80%] items-start space-x-2',
                    isUser && 'flex-row-reverse space-x-reverse',
                )}
            >
                <div
                    className={cn(
                        'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full',
                        isUser ? 'bg-primary/10' : 'bg-muted',
                    )}
                >
                    {isUser ? (
                        <User className="text-primary h-4 w-4" />
                    ) : (
                        <Bot className="text-muted-foreground h-4 w-4" />
                    )}
                </div>

                <div className="flex flex-col">
                    <div
                        className={cn(
                            'rounded-2xl px-4 py-2 shadow-sm',
                            isUser
                                ? 'bg-primary text-primary-foreground rounded-tr-none'
                                : 'border-border bg-card text-card-foreground rounded-tl-none border',
                        )}
                    >
                        <p className="whitespace-pre-wrap">{message}</p>
                    </div>

                    <span
                        className={cn(
                            'text-muted-foreground mt-1 text-xs',
                            isUser ? 'text-right' : 'text-left',
                        )}
                    >
                        {formattedTime}
                    </span>
                </div>
            </div>
        </div>
    );
}

// Dashboard-friendly Conversation card (no fixed page centering)
export default function Conversation({ className = '' }) {
    const [messages, setMessages] = useState(initialMessages);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        const userMessage = {
            id: Date.now().toString(),
            content: input,
            sender: 'user',
            timestamp: new Date().toISOString(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        // setIsTyping(true);
        // setTimeout(() => {
        //     const aiMessage = {
        //         id: (Date.now() + 1).toString(),
        //         content:
        //             "Thanks for your message! I'm here to help with any other questions you might have about our services or features.",
        //         sender: 'ai',
        //         timestamp: new Date().toISOString(),
        //     };

        //     setMessages((prev) => [...prev, aiMessage]);
        //     setIsTyping(false);
        // }, 1500);
    };

    return (
        <div className={cn("bg-card border border-border rounded-xl shadow-sm flex flex-col h-100 w-full", className)}>
            <div className="flex items-center px-2 py-1 gap-3">
                {/* Avatar with status dot */}
                <div className="relative">
                    <div className="bg-cyan-400 h-12 w-12 rounded-full flex items-center justify-center text-white font-semibold text-lg select-none">
                        RA
                    </div>
                    <span className="absolute top-0 right-0 block h-3 w-3 rounded-full bg-lime-400 border-2 border-white" />
                </div>
                <div>
                    <h2 className="text-lg font-semibold text-gray-800">Innovision Squad</h2>
                    <p className="text-lime-500 text-sm font-medium">Online</p>
                </div>
            </div>
            <div className="flex-1 flex flex-col min-h-0">
                <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4">
                    {messages.map((message) => (
                        <ChatBubble
                            key={message.id}
                            message={message.content}
                            isUser={message.sender === 'user'}
                            timestamp={message.timestamp}
                        />
                    ))}
                    {isTyping && (
                        <div className="text-muted-foreground flex items-center space-x-2 text-xs">
                            <div className="flex space-x-1">
                                <div className="bg-muted-foreground/70 h-2 w-2 animate-bounce rounded-full" style={{ animationDelay: '0ms' }} />
                                <div className="bg-muted-foreground/70 h-2 w-2 animate-bounce rounded-full" style={{ animationDelay: '150ms' }} />
                                <div className="bg-muted-foreground/70 h-2 w-2 animate-bounce rounded-full" style={{ animationDelay: '300ms' }} />
                            </div>
                            <span>AI is typing...</span>
                        </div>
                    )}
                </div>
                <div className="border-t border-border p-3">
                    <form onSubmit={handleSendMessage} className="flex gap-2">
                        <Input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your message..."
                            className="flex-1"
                        />
                        <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90">
                            <Send className="h-4 w-4" />
                        </Button>
                        <Button type="button" size="icon" variant="outline">
                            <Mic className="h-4 w-4" />
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
