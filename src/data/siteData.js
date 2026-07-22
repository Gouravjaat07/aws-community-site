import gourav from '../assets/Core-Team/gourav.png'
import siddharth from '../assets/Core-Team/siddharth.jpeg'
import gautam from '../assets/Core-Team/gautam1.png'
import aditya from '../assets/Core-Team/aditya.jpeg'
import ushaMam from '../assets/Core-Team/usha-mam.jpeg'

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Events', path: '/events' },
  { label: 'Speakers', path: '/speakers' },
  { label: 'Sponsors', path: '/sponsors' },
  { label: 'Team', path: '/team' },
  { label: 'FAQ', path: '/faq' }
]

export const heroStats = [
  { label: 'Members', value: '1,200+' },
  { label: 'Events / Year', value: '24' },
  { label: 'Workshops', value: '50+' }
]

export const speakers = [
  { name: 'Ananya Rao', role: 'Solutions Architect, AWS', topic: 'Serverless at Scale' },
  { name: 'Rohan Mehta', role: 'DevOps Engineer, CloudNova', topic: 'CI/CD on AWS' },
  { name: 'Sara Khan', role: 'ML Engineer, DataOrbit', topic: 'Generative AI on Bedrock' },
  { name: 'Arjun Iyer', role: 'Security Specialist, ShieldOps', topic: 'Cloud Security Best Practices' },
  { name: 'Priya Das', role: 'SRE, ByteStack', topic: 'Observability with CloudWatch' },
  { name: 'Kabir Sharma', role: 'Startup Founder, LaunchLayer', topic: 'Building SaaS on AWS' }
]

export const sponsors = [
  { name: 'AWS Educate', tier: 'Title Sponsor' },
  { name: 'CloudNova', tier: 'Gold Sponsor' },
  { name: 'ByteStack', tier: 'Gold Sponsor' },
  { name: 'DevHub', tier: 'Silver Sponsor' },
  { name: 'CodeCampus', tier: 'Community Partner' },
  { name: 'StartupSphere', tier: 'Ecosystem Partner' }
]

export const team = [
  {
    name: 'Dr. Usha Batra',
    role: 'Faculty Member',
    image: ushaMam,
    linkedin: 'https://www.linkedin.com/in/dr-usha-batra-90a8b97b?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    type: 'faculty'
  },
  {
    name: 'Gourav',
    role: 'Chapter Lead',
    image: gourav,
    linkedin: 'https://linkedin.com/in/gourav-jaat',
    type: 'captain'
  },
  {
    name: 'Siddharth',
    role: 'Deputy Chapter Lead',
    image: siddharth,
    linkedin: 'https://www.linkedin.com/in/siddharth-bhardwaj-317a60320/',
    type: 'captain'
  },
  {
    name: 'Aditya',
    role: 'Technical Lead',
    image: aditya,
    linkedin: 'https://www.linkedin.com/in/aditya-sharma-8b2aa9244/',
    type: 'core'
  },
  {
    name: 'Gautam',
    role: 'Marketing and Social Media Lead',
    image: gautam,
    linkedin: 'https://www.linkedin.com/in/gautam-sharma-848697309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    type: 'core'
  },
  {
    name: 'Rewa',
    role: 'Event and Operations Lead',
    // linkedin: 'https://linkedin.com/in/rewa',
    type: 'core'
  },
  {
    name: 'Shradha',
    role: 'Partnership and Outreach Lead',
    // linkedin: 'https://linkedin.com/in/shradha',
    type: 'core'
  }
]

export const marqueeBrands = [
  'AWS',
  'Amazon EC2',
  'Amazon S3',
  'AWS Lambda',
  'Amazon Bedrock',
  'AWS Educate',
  'AWS Academy',
  'AWS Cloud Clubs',
]