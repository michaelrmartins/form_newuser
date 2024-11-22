function sanitizer(values) {
    const sanitized = values.replace(/[\.\-]/g, '');

    return (sanitized)
}

// console.log(sanitizer("059-09-5554.66"))