function sanitizer(values) {
    const sanitized = values.replace(/[\.\-]/g, '');
    return (sanitized)
}
