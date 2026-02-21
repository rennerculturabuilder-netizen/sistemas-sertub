export function SectionHeader({ title, subtitle, badge }: { title: React.ReactNode; subtitle?: React.ReactNode; badge?: React.ReactNode }) {
    return (
        <div className="mb-12 max-w-3xl">
            {badge && (
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                    {badge}
                </div>
            )}
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg text-muted-foreground">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
