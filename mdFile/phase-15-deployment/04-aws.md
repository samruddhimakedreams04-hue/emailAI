# AWS Deployment

**Phase:** Phase 15 - Deployment  
**Status:** [ ] Not Started | [ ] In Progress | [ ] Done  
**Priority:** Low  

---

## Objective

Deploy to AWS (EC2, ECS, or Elastic Beanstalk).

---

## Requirements

- Choose AWS service (ECS Fargate recommended)
- MongoDB Atlas for database
- Load balancer with HTTPS
- Secrets in AWS Secrets Manager

---

## Implementation Steps

1. Push Docker image to ECR
2. Create ECS task definition with env from Secrets Manager
3. Configure ALB and target group on port 3000
4. Set up Route 53 domain and SSL certificate

---

## Testing

- [ ] Service accessible via HTTPS
- [ ] Auto-scaling configured (optional)
- [ ] Logs in CloudWatch

---

## Notes

Most complex option — suitable for production scale.
