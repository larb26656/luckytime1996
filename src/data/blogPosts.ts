export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Astro',
    slug: 'getting-started-with-astro',
    excerpt: 'Learn the basics of Astro and how to build fast, content-focused websites.',
    content: 'Full blog post content would go here...',
    author: 'John Doe',
    date: '2025-08-15',
    readTime: '5 min read',
    tags: ['Astro', 'Web Development', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'The Future of React',
    slug: 'future-of-react',
    excerpt: 'Exploring the latest features and upcoming changes in React 19.',
    content: 'Full blog post content would go here...',
    author: 'Jane Smith',
    date: '2025-08-10',
    readTime: '7 min read',
    tags: ['React', 'JavaScript', 'Frontend'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324b6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'TypeScript Best Practices',
    slug: 'typescript-best-practices',
    excerpt: 'Essential TypeScript patterns and practices for better code quality.',
    content: 'Full blog post content would go here...',
    author: 'Alex Johnson',
    date: '2025-08-05',
    readTime: '8 min read',
    tags: ['TypeScript', 'Development', 'Best Practices']
  },
  {
    id: '4',
    title: 'Building Accessible Web Apps',
    slug: 'accessible-web-apps',
    excerpt: 'A comprehensive guide to web accessibility and inclusive design.',
    content: 'Full blog post content would go here...',
    author: 'Sam Wilson',
    date: '2025-07-28',
    readTime: '10 min read',
    tags: ['Accessibility', 'Web Development', 'UI/UX'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];
