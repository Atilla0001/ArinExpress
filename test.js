
const mongoose = require('mongoose');
const Post = require('./models/Post')

mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db')
    .then(() => console.log('MongoDB bağlantısı başarılı'))
    .catch(err => console.error(err));


/* 
    async function updatePostById(id, updatedData) {
        try {
            const post = await Post.findByIdAndUpdate(id, updatedData, { new: true });
            console.log('Güncellenmiş post:', post);
        } catch (error) {
            console.error('Post güncellenirken hata oluştu:', error);
        }
    }
    
    (async () => {
        const postId = await createPost();
        await findPost();
        if (postId) {
            await updatePostById(postId, { title: 'Güncellenmiş Post Başlığı', content: 'Güncellenmiş Post İçeriği' });
        }
    })();
 */


/* async function findPost() {
    try {
        const post = await Post.find({ title: 'Ikinci Post Bqsligim' });
        console.log('Bulunan post:', post);
    } catch (error) {
        console.error('Post bulunurken hata oluştu:', error);
    }
}
findPost(); */

/* async function createPost() {
    try {
        const post = await Post.create({
            title: 'benim ilk post başlığım',
            content: 'benim ilk post içeriğim'
        });
        console.log(post);
    } catch (error) {
        console.error(error);
    }
}

createPost(); */
