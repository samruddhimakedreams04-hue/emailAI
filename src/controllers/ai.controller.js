import * as featuresService from '../services/ai/features.service.js';

function getAccountId(req) {
  return req.user.activeAccountId || null;
}

export async function summary(req, res, next) {
  try {
    const result = await featuresService.summarizeEmail(
      req.user.id,
      getAccountId(req),
      req.body
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
}

export async function smartReply(req, res, next) {
  try {
    const result = await featuresService.generateSmartReply(
      req.user.id,
      getAccountId(req),
      req.body
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
}

export async function rewrite(req, res, next) {
  try {
    const result = await featuresService.rewriteEmail(
      req.user.id,
      getAccountId(req),
      req.body
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
}

export async function professionalTone(req, res, next) {
  try {
    const result = await featuresService.applyProfessionalTone(
      req.user.id,
      getAccountId(req),
      req.body
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
}

export async function friendlyTone(req, res, next) {
  try {
    const result = await featuresService.applyFriendlyTone(
      req.user.id,
      getAccountId(req),
      req.body
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
}

export async function grammarFix(req, res, next) {
  try {
    const result = await featuresService.fixGrammar(req.user.id, getAccountId(req), req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
}

export async function translate(req, res, next) {
  try {
    const result = await featuresService.translateEmail(
      req.user.id,
      getAccountId(req),
      req.body
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
}

export async function subjectGenerator(req, res, next) {
  try {
    const result = await featuresService.generateSubjects(
      req.user.id,
      getAccountId(req),
      req.body
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
}

export async function classify(req, res, next) {
  try {
    const result = await featuresService.classifyEmail(
      req.user.id,
      getAccountId(req),
      req.body
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
}
