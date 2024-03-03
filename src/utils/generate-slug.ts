export function generateSlug(category: string, title: string, model: string): string {
    const slugParts = [category, title, model].map(part =>
        part.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')
    );
    return slugParts.join('-');
}