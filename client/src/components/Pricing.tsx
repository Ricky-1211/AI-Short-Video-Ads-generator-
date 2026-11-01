import Title from './Title';
import { useClerk } from '@clerk/clerk-react';
import { plansData } from '../assets/dummy-data';

export default function Pricing() {
    const { openSignUp } = useClerk();

    return (
        <section id="pricing" className="py-20 bg-white/3 border-t border-white/6">
            <div className="max-w-6xl mx-auto px-4">

                <Title
                    title="Pricing"
                    heading="Pricing Plans"
                    description="Our Pricing Plans are simple, transparent and flexible. Choose the plan that best suits your needs."
                />

                <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
                    {plansData.map((plan) => (
                        <article
                            key={plan.id}
                            className={`flex flex-col rounded-2xl border p-6 ${
                                plan.popular
                                    ? 'border-violet-400 bg-violet-500/10'
                                    : 'border-white/10 bg-white/5'
                            }`}
                        >
                            {plan.popular && (
                                <span className="mb-3 text-xs font-semibold uppercase tracking-wide text-violet-300">
                                    Most popular
                                </span>
                            )}
                            <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                            <p className="mt-2 text-sm text-gray-400">{plan.desc}</p>
                            <p className="mt-6 text-3xl font-semibold text-white">
                                {plan.price}
                                <span className="text-sm font-normal text-gray-400"> / month</span>
                            </p>
                            <ul className="my-6 flex-1 space-y-3 text-sm text-gray-300">
                                {plan.features.map((feature) => (
                                    <li key={feature}>{feature}</li>
                                ))}
                            </ul>
                            <button
                                type="button"
                                onClick={() => openSignUp()}
                                className="rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-violet-500"
                            >
                                Get started
                            </button>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};