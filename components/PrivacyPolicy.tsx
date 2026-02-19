import React from 'react';
import { Shield, Lock, Eye, Server, Mail } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
    const lastUpdated = new Date().toLocaleDateString();

    return (
        <div className="bg-slate-900 min-h-screen text-slate-200 selection:bg-primary-500/30 font-sans">
            <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                        Matchey
                    </h1>
                    <span className="text-sm text-slate-400">Privacy Policy</span>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-12">
                <div className="prose prose-invert prose-slate max-w-none">
                    <div className="mb-12 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-100">Privacy Policy</h1>
                        <p className="text-slate-400">Last Updated: {lastUpdated}</p>
                    </div>

                    <section className="mb-12 bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
                        <p className="lead text-lg text-slate-300">
                            At Matchey, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains what we collect, how we collect it, how we use it, who we share it with, and how we safeguard your information when you use our mobile application.
                        </p>
                    </section>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/30">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                                <Shield className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-slate-100">Data Protection</h3>
                            <p className="text-slate-400">We implement industry-standard security measures to ensure your personal data remains safe and confidential.</p>
                        </div>

                        <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/30">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                                <Lock className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-slate-100">Secure Communication</h3>
                            <p className="text-slate-400">Your conversations and interactions are processed securely to maintain the integrity of your private exchanges.</p>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-slate-100 flex items-center gap-2">
                                <Eye className="w-6 h-6 text-primary-400" />
                                1. Information We Collect
                            </h2>
                            <ul className="space-y-3 list-disc pl-5 text-slate-300">
                                <li><strong>Account and Profile Data:</strong> Name, email address, phone number, gender, occupation details, interests, profile photos, and voice intro you provide.</li>
                                <li><strong>Content Data:</strong> Messages, media attachments, and selfie/verification content you choose to upload.</li>
                                <li><strong>AI Feature Data:</strong> Content submitted when you use AI-powered features, including photos for image verification, voice recordings for voice verification/transcription, and chat text/related attachments for AI replies.</li>
                                <li><strong>Technical and Usage Data:</strong> App activity, log/error diagnostics, device/app identifiers, and push notification token.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-slate-100 flex items-center gap-2">
                                <Server className="w-6 h-6 text-primary-400" />
                                2. How We Use Your Information
                            </h2>
                            <p className="text-slate-300 mb-4">We use the collected data to:</p>
                            <ul className="space-y-3 list-disc pl-5 text-slate-300">
                                <li>Facilitate account creation, sign in, and account security.</li>
                                <li>Build and display your profile to other users based on your settings.</li>
                                <li>Enable communication features between matched users.</li>
                                <li>Perform safety and authenticity checks (including image/voice verification).</li>
                                <li>Provide AI-assisted chat replies when you invoke AI chat features.</li>
                                <li>Monitor, investigate, and prevent fraudulent, harmful, or abusive activity.</li>
                                <li>Send important updates, service messages, and support responses.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-slate-100">3. How We Collect Information</h2>
                            <ul className="space-y-3 list-disc pl-5 text-slate-300">
                                <li><strong>Directly from you:</strong> When you create an account, complete onboarding, upload photos/voice, or send messages.</li>
                                <li><strong>Automatically:</strong> Through app/server logs and service diagnostics when you use the app.</li>
                                <li><strong>From integrated services:</strong> Authentication and infrastructure providers used to operate core app functionality.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-slate-100 flex items-center gap-2">
                                <Lock className="w-6 h-6 text-primary-400" />
                                4. Sharing of Your Information
                            </h2>
                            <p className="text-slate-300 mb-4">We do not sell your personal data. We may share information only in the following situations:</p>
                            <ul className="space-y-3 list-disc pl-5 text-slate-300">
                                <li><strong>With Other Users:</strong> Your public profile information (name, age, photos, voice introductions) is visible to other users to facilitate matching.</li>
                                <li><strong>AI Service Provider (OpenAI, L.L.C.):</strong> When you use AI-powered features, relevant content is transmitted to OpenAI to perform image verification, voice verification/transcription, and AI-generated chat replies. This data sharing occurs only after required in-app consent for AI features.</li>
                                <li><strong>Infrastructure and Authentication Providers:</strong> We use third-party providers to support authentication, cloud storage, notifications, and service operations. These providers process data only to provide contracted services.</li>
                                <li><strong>Legal Obligations:</strong> We may disclose information if required to do so by law or in response to valid requests by public authorities.</li>
                            </ul>
                            <p className="text-slate-300 mt-4">
                                We require service providers that process personal data on our behalf to implement privacy and security protections appropriate to the data they process.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-slate-100">5. AI Feature Consent</h2>
                            <p className="text-slate-300">
                                Before personal data is sent to our third-party AI service provider for AI-powered features, the app presents a consent notice that identifies what data is sent, who receives it, and why. If you do not agree, AI-powered features will not proceed.
                            </p>
                            <p className="text-slate-300 mt-3">
                                We do not use your personal data for third-party advertising.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-slate-100">6. Data Retention</h2>
                            <p className="text-slate-300">
                                We retain your personal information only for as long as necessary to fulfill the purposes set out in this Privacy Policy. You can request deletion of your account and data at any time through the app settings.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-slate-100">7. Children's Privacy</h2>
                            <p className="text-slate-300">
                                Matchey is not intended for use by children under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal data from a child under 18, we will take steps to delete such information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-slate-100 flex items-center gap-2">
                                <Mail className="w-6 h-6 text-primary-400" />
                                8. Contact Us
                            </h2>
                            <p className="text-slate-300 mb-4">
                                If you have questions or comments about this Privacy Policy, please contact us at:
                            </p>
                            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 inline-block">
                                <p className="text-slate-200 font-medium">Matchey Support Team</p>
                                <a href="mailto:codeboi98@gmail.com" className="text-primary-400 hover:text-primary-300 transition-colors">
                                    codeboi98@gmail.com
                                </a>
                            </div>
                        </section>
                    </div>
                </div>

                <footer className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Matchey. All rights reserved.</p>
                </footer>
            </main>
        </div>
    );
};

export default PrivacyPolicy;
