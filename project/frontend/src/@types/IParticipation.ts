// participation_id String    @id @db.Uuid
// user_id          String    @db.Uuid
// video_url        String?
// image_url        String?
// description      String
// challenge_id     String    @db.Uuid

export interface IParticipation {
    participation_id: string,
    user_id: string,
    video_url: string,
    image_url: string,
    description: string,
    challenge_id: string,
    created_at: Date
}
