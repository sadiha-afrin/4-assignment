
// Create

export const createBlog=  async (req, res) => {
    return res.send('Blog created successfully');
}

// Read
export const readBlog =  async (req, res) => {
    return res.send('Blog read successfully');
   
}


// Update
export const updateBlog =  async (req, res) => {
    return res.send('Blog update successfully');
}


// Delete
export const deleteBlog =  async (req, res) => {
    return res.json('Blog delete successfully');
}
