require 'httparty'

class FetchPostsService
  def perform
    response = HTTParty.get('https://www.reddit.com/r/aitah/top.json?limit=25')
    response['data']['children'].each do |child|
      data = child['data']
      Post.create(
        title: data['title'],
        body: data['selftext'],
        author: data['author'],
        url: data['url']
      )
    end
  end
end